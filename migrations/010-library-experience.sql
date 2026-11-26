ALTER TABLE csquest_library_entries ADD COLUMN integrity_requested boolean NOT NULL DEFAULT false;
ALTER TABLE csquest_library_entries ADD COLUMN integrity_checksum text;
CREATE TABLE csquest_library_chunks (
 entry_id uuid NOT NULL REFERENCES csquest_library_entries(id) ON DELETE CASCADE,
 start_byte bigint NOT NULL CHECK(start_byte>=0),length integer NOT NULL CHECK(length>0),sha256 text NOT NULL CHECK(sha256 ~ '^[a-f0-9]{64}$'),
 PRIMARY KEY(entry_id,start_byte)
);
ALTER TABLE csquest_library_preferences ADD COLUMN document_page integer NOT NULL DEFAULT 1;
ALTER TABLE csquest_library_preferences ADD COLUMN document_pages integer NOT NULL DEFAULT 0;
ALTER TABLE csquest_library_preferences ADD COLUMN duration double precision NOT NULL DEFAULT 0;
ALTER TABLE csquest_library_preferences ADD COLUMN completed boolean NOT NULL DEFAULT false;
CREATE TABLE csquest_library_playlists (
 id uuid PRIMARY KEY,user_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,name text NOT NULL CHECK(length(name) BETWEEN 1 AND 100),
 entry_ids uuid[] NOT NULL DEFAULT '{}',updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE csquest_library_activity (
 id bigserial PRIMARY KEY,owner_id uuid NOT NULL,actor_id uuid,actor_name text NOT NULL DEFAULT 'System',
 action text NOT NULL,entry_id uuid,drive text,name text NOT NULL DEFAULT '',details jsonb NOT NULL DEFAULT '{}',created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX csquest_library_activity_owner ON csquest_library_activity(owner_id,id DESC);
CREATE FUNCTION csquest_track_library() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE r record; action_name text; event_details jsonb := '{}';
BEGIN
 IF TG_TABLE_NAME='csquest_library_entries' THEN
  IF TG_OP='DELETE' THEN
   IF OLD.status='uploading' THEN INSERT INTO csquest_library_activity(owner_id,actor_name,action,entry_id,drive,name) VALUES(OLD.owner_id,'System','upload_expired',OLD.id,OLD.drive,OLD.name); END IF;
   RETURN OLD;
  END IF;
  r:=NEW;
  IF TG_OP='INSERT' THEN action_name:=CASE WHEN NEW.kind='folder' THEN 'folder_created' WHEN NEW.status='ready' THEN 'file_imported' ELSE 'upload_started' END;
  ELSIF OLD.status IS DISTINCT FROM NEW.status THEN action_name:=CASE WHEN NEW.status='ready' THEN 'upload_completed' WHEN NEW.status='deleting' AND OLD.status='uploading' THEN 'upload_canceled' WHEN NEW.status='deleting' THEN 'deleted' END;
  ELSIF OLD.final_name IS NOT NULL AND NEW.final_name IS NULL THEN action_name:='replaced';event_details:=jsonb_build_object('previousEntry',OLD.replace_id);
  ELSIF OLD.name IS DISTINCT FROM NEW.name THEN action_name:='renamed';event_details:=jsonb_build_object('previousName',OLD.name);
  ELSIF OLD.parent_id IS DISTINCT FROM NEW.parent_id THEN action_name:='moved';event_details:=jsonb_build_object('previousParent',OLD.parent_id,'parent',NEW.parent_id);
  END IF;
 ELSIF TG_TABLE_NAME='csquest_library_access' THEN
  IF TG_OP='DELETE' THEN r:=OLD; ELSE r:=NEW; END IF;
  action_name:=CASE WHEN TG_OP='DELETE' THEN 'access_revoked' ELSE 'access_granted' END;
  INSERT INTO csquest_library_activity(owner_id,actor_id,actor_name,action,details) VALUES(r.owner_id,nullif(current_setting('csquest.actor_id',true),'')::uuid,coalesce(nullif(current_setting('csquest.actor_name',true),''),'System'),action_name,jsonb_build_object('userId',r.user_id,'username',(SELECT username FROM csquest_users WHERE id=r.user_id)));
  RETURN NULL;
 ELSE
  IF TG_OP='DELETE' THEN r:=OLD; ELSE r:=NEW; END IF;
  action_name:=CASE WHEN TG_OP='DELETE' THEN 'public_link_revoked' ELSE 'public_link_created' END;
  INSERT INTO csquest_library_activity(owner_id,actor_id,actor_name,action,entry_id,drive,details) VALUES(r.owner_id,nullif(current_setting('csquest.actor_id',true),'')::uuid,coalesce(nullif(current_setting('csquest.actor_name',true),''),'System'),action_name,r.entry_id,r.drive,jsonb_build_object('linkId',r.id,'allowUpload',r.allow_upload,'capBytes',r.cap_bytes));
  RETURN NULL;
 END IF;
 IF action_name IS NOT NULL THEN
  INSERT INTO csquest_library_activity(owner_id,actor_id,actor_name,action,entry_id,drive,name,details) VALUES(r.owner_id,nullif(current_setting('csquest.actor_id',true),'')::uuid,coalesce(nullif(current_setting('csquest.actor_name',true),''),'System'),action_name,r.id,r.drive,r.name,event_details);
 END IF;
 RETURN NULL;
END $$;
CREATE TRIGGER csquest_entry_activity AFTER INSERT OR UPDATE OR DELETE ON csquest_library_entries FOR EACH ROW EXECUTE FUNCTION csquest_track_library();
CREATE TRIGGER csquest_access_activity AFTER INSERT OR UPDATE OR DELETE ON csquest_library_access FOR EACH ROW EXECUTE FUNCTION csquest_track_library();
CREATE TRIGGER csquest_link_activity AFTER INSERT OR DELETE ON csquest_library_public_links FOR EACH ROW EXECUTE FUNCTION csquest_track_library();
