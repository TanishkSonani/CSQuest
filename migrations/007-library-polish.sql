ALTER TABLE csquest_library_access ADD COLUMN level text NOT NULL DEFAULT 'full' CHECK(level IN ('limited','full'));
ALTER TABLE csquest_library_access ADD COLUMN scopes jsonb NOT NULL DEFAULT '[]';
ALTER TABLE csquest_library_public_links ADD COLUMN owner_id uuid REFERENCES csquest_users(id) ON DELETE CASCADE;
UPDATE csquest_library_public_links p SET owner_id=e.owner_id FROM csquest_library_entries e WHERE e.id=p.entry_id;
ALTER TABLE csquest_library_public_links ALTER COLUMN owner_id SET NOT NULL;
-- Keep older release inserts valid during a code rollback. Versioned token
-- digests in the new server make new protected links unreadable to old code.
CREATE FUNCTION csquest_public_link_owner() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
 IF NEW.owner_id IS NULL AND NEW.entry_id IS NOT NULL THEN
  SELECT owner_id INTO NEW.owner_id FROM csquest_library_entries WHERE id=NEW.entry_id;
 END IF;
 RETURN NEW;
END;
$$;
CREATE TRIGGER csquest_public_link_owner_fill BEFORE INSERT OR UPDATE ON csquest_library_public_links FOR EACH ROW EXECUTE FUNCTION csquest_public_link_owner();
ALTER TABLE csquest_library_public_links ALTER COLUMN entry_id DROP NOT NULL;
ALTER TABLE csquest_library_public_links ADD COLUMN drive text CHECK(drive IN ('boot','block'));
ALTER TABLE csquest_library_public_links ADD CONSTRAINT csquest_public_scope CHECK((entry_id IS NOT NULL AND drive IS NULL) OR (entry_id IS NULL AND drive IS NOT NULL));
CREATE UNIQUE INDEX csquest_public_drive ON csquest_library_public_links(owner_id,drive) WHERE drive IS NOT NULL;
ALTER TABLE csquest_library_public_links ADD COLUMN password_hash jsonb;
ALTER TABLE csquest_library_public_links ADD COLUMN allow_upload boolean NOT NULL DEFAULT false;
ALTER TABLE csquest_library_public_links ADD COLUMN cap_bytes bigint CHECK(cap_bytes IS NULL OR cap_bytes>0);
CREATE TABLE csquest_library_public_sessions(hash text PRIMARY KEY,link_id uuid NOT NULL REFERENCES csquest_library_public_links(id) ON DELETE CASCADE,expires_at timestamptz NOT NULL);
CREATE INDEX csquest_public_sessions_expiry ON csquest_library_public_sessions(expires_at);
ALTER TABLE csquest_library_entries ADD COLUMN public_link_id uuid REFERENCES csquest_library_public_links(id) ON DELETE SET NULL;
ALTER TABLE csquest_library_entries ADD COLUMN public_session_hash text;
