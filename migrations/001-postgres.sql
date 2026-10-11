CREATE TABLE IF NOT EXISTS csquest_courses (
 id text PRIMARY KEY,
 manifest jsonb NOT NULL,
 sort_order integer NOT NULL DEFAULT 100,
 storage_key text UNIQUE NOT NULL
);
CREATE TABLE IF NOT EXISTS csquest_course_modules (
 course_id text REFERENCES csquest_courses(id) ON DELETE CASCADE,
 filename text NOT NULL,
 source text NOT NULL,
 PRIMARY KEY(course_id,filename)
);
CREATE TABLE IF NOT EXISTS csquest_course_documents (
 course_id text REFERENCES csquest_courses(id) ON DELETE CASCADE,
 path text NOT NULL,
 data jsonb NOT NULL,
 PRIMARY KEY(course_id,path)
);
CREATE TABLE IF NOT EXISTS csquest_course_status (
 course_id text PRIMARY KEY REFERENCES csquest_courses(id) ON DELETE CASCADE,
 data jsonb NOT NULL
);
CREATE TABLE IF NOT EXISTS csquest_users (
 id uuid PRIMARY KEY,
 username text UNIQUE NOT NULL,
 display_name text NOT NULL,
 avatar text NOT NULL,
 password jsonb NOT NULL,
 recovery_hash text NOT NULL,
 created_at bigint NOT NULL,
 last_login_at bigint,
 revision integer NOT NULL DEFAULT 0,
 updated_at bigint NOT NULL
);
CREATE TABLE IF NOT EXISTS csquest_user_data (
 user_id uuid REFERENCES csquest_users(id) ON DELETE CASCADE,
 key text NOT NULL,
 value text NOT NULL,
 PRIMARY KEY(user_id,key)
);
CREATE TABLE IF NOT EXISTS csquest_sessions (
 hash text PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 created_at bigint NOT NULL,
 expires_at bigint NOT NULL
);
CREATE INDEX IF NOT EXISTS csquest_sessions_user ON csquest_sessions(user_id);
CREATE INDEX IF NOT EXISTS csquest_sessions_expiry ON csquest_sessions(expires_at);
CREATE TABLE IF NOT EXISTS csquest_login_attempts (
 address_hash text PRIMARY KEY,
 count integer NOT NULL,
 expires_at bigint NOT NULL
);
