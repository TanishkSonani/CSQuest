ALTER TABLE csquest_users ADD COLUMN role text NOT NULL DEFAULT 'learner' CHECK(role IN ('learner','admin'));
UPDATE csquest_library_access SET role='viewer';
ALTER TABLE csquest_library_entries ADD COLUMN replace_id uuid REFERENCES csquest_library_entries(id) ON DELETE SET NULL;
ALTER TABLE csquest_library_entries ADD COLUMN final_name text;
CREATE TABLE csquest_library_preferences (
 user_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 entry_id uuid NOT NULL REFERENCES csquest_library_entries(id) ON DELETE CASCADE,
 favorite boolean NOT NULL DEFAULT false,
 last_opened timestamptz,
 position double precision NOT NULL DEFAULT 0 CHECK(position>=0),
 speed double precision NOT NULL DEFAULT 1 CHECK(speed>=0.25 AND speed<=3),
 PRIMARY KEY(user_id,entry_id)
);
CREATE TABLE csquest_resource_notes (
 id uuid PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 entry_id uuid REFERENCES csquest_library_entries(id) ON DELETE CASCADE,
 course_id text REFERENCES csquest_courses(id) ON DELETE CASCADE,
 lesson_id integer,
 seconds double precision NOT NULL DEFAULT 0 CHECK(seconds>=0),
 body text NOT NULL CHECK(length(body) BETWEEN 1 AND 4000),
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE csquest_lesson_resources (
 entry_id uuid NOT NULL REFERENCES csquest_library_entries(id) ON DELETE CASCADE,
 course_id text NOT NULL REFERENCES csquest_courses(id) ON DELETE CASCADE,
 lesson_id integer NOT NULL CHECK(lesson_id>=0),
 PRIMARY KEY(entry_id,course_id,lesson_id)
);
CREATE TABLE csquest_issue_reports (
 id uuid PRIMARY KEY,
 user_id uuid REFERENCES csquest_users(id) ON DELETE SET NULL,
 title text NOT NULL CHECK(length(title) BETWEEN 1 AND 160),
 description text NOT NULL CHECK(length(description) BETWEEN 1 AND 4000),
 context jsonb NOT NULL DEFAULT '{}',
 status text NOT NULL DEFAULT 'new' CHECK(status IN ('new','in_progress','resolved')),
 priority text NOT NULL DEFAULT 'normal' CHECK(priority IN ('low','normal','high')),
 response text NOT NULL DEFAULT '' CHECK(length(response)<=4000),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE csquest_library_undo (
 id uuid PRIMARY KEY,
 actor_id uuid REFERENCES csquest_users(id) ON DELETE SET NULL,
 before_state jsonb NOT NULL,
 after_state jsonb NOT NULL,
 undone boolean NOT NULL DEFAULT false,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX csquest_resource_notes_user_created ON csquest_resource_notes(user_id,created_at DESC);
CREATE INDEX csquest_issue_reports_user_created ON csquest_issue_reports(user_id,created_at DESC);
CREATE INDEX csquest_issue_reports_updated ON csquest_issue_reports(updated_at DESC);
