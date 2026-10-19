CREATE TABLE csquest_library_entries (
 id uuid PRIMARY KEY,
 owner_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE RESTRICT,
 drive text NOT NULL CHECK (drive IN ('boot','block')),
 parent_id uuid REFERENCES csquest_library_entries(id) ON DELETE RESTRICT,
 name text NOT NULL CHECK (length(name) BETWEEN 1 AND 200),
 kind text NOT NULL CHECK (kind IN ('file','folder')),
 size bigint NOT NULL DEFAULT 0 CHECK (size >= 0),
 uploaded bigint NOT NULL DEFAULT 0 CHECK (uploaded >= 0 AND uploaded <= size),
 status text NOT NULL DEFAULT 'ready' CHECK (status IN ('ready','uploading','deleting')),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 expires_at timestamptz
);
CREATE UNIQUE INDEX csquest_library_names ON csquest_library_entries(owner_id,drive,COALESCE(parent_id,'00000000-0000-0000-0000-000000000000'::uuid),lower(name));
CREATE INDEX csquest_library_listing ON csquest_library_entries(owner_id,drive,parent_id);
