CREATE TABLE csquest_library_access (
 owner_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 user_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 role text NOT NULL CHECK (role IN ('viewer','editor')),
 created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(owner_id,user_id),
 CHECK (owner_id <> user_id)
);
CREATE TABLE csquest_library_public_links (
 id uuid PRIMARY KEY,
 entry_id uuid NOT NULL UNIQUE REFERENCES csquest_library_entries(id) ON DELETE CASCADE,
 token_hash text NOT NULL UNIQUE CHECK (length(token_hash)=64),
 created_at timestamptz NOT NULL DEFAULT now(),
 expires_at timestamptz
);
