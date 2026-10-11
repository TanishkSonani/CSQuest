CREATE TABLE csquest_social_profiles (
 user_id uuid PRIMARY KEY REFERENCES csquest_users(id) ON DELETE CASCADE,
 discoverable boolean NOT NULL DEFAULT true,
 league_enabled boolean NOT NULL DEFAULT false,
 tier smallint NOT NULL DEFAULT 0 CHECK(tier BETWEEN 0 AND 4)
);
INSERT INTO csquest_social_profiles(user_id) SELECT id FROM csquest_users;
CREATE TABLE csquest_friendships (
 user_low uuid REFERENCES csquest_users(id) ON DELETE CASCADE,
 user_high uuid REFERENCES csquest_users(id) ON DELETE CASCADE,
 requested_by uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 status text NOT NULL CHECK(status IN ('pending','accepted')),
 created_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(user_low,user_high),
 CHECK(user_low<user_high),
 CHECK(requested_by IN (user_low,user_high))
);
CREATE INDEX csquest_friendships_high ON csquest_friendships(user_high);
CREATE TABLE csquest_activity_events (
 id bigserial PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 course_id text NOT NULL REFERENCES csquest_courses(id) ON DELETE CASCADE,
 event_key text NOT NULL,
 xp integer NOT NULL CHECK(xp BETWEEN 1 AND 200),
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(user_id,course_id,event_key)
);
CREATE INDEX csquest_activity_time ON csquest_activity_events(user_id,created_at);
CREATE TABLE csquest_league_entries (
 user_id uuid REFERENCES csquest_users(id) ON DELETE CASCADE,
 week date NOT NULL,
 tier smallint NOT NULL CHECK(tier BETWEEN 0 AND 4),
 cohort integer NOT NULL,
 settled boolean NOT NULL DEFAULT false,
 joined_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(user_id,week)
);
CREATE INDEX csquest_league_cohort ON csquest_league_entries(week,tier,cohort);
CREATE TABLE csquest_challenges (
 id uuid PRIMARY KEY,
 creator_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 title text NOT NULL CHECK(length(title) BETWEEN 1 AND 80),
 mode text NOT NULL CHECK(mode IN ('race','team')),
 goal integer NOT NULL CHECK(goal BETWEEN 100 AND 10000),
 starts_at timestamptz NOT NULL DEFAULT now(),
 ends_at timestamptz NOT NULL,
 cancelled boolean NOT NULL DEFAULT false,
 CHECK(ends_at>starts_at)
);
CREATE TABLE csquest_challenge_members (
 challenge_id uuid REFERENCES csquest_challenges(id) ON DELETE CASCADE,
 user_id uuid REFERENCES csquest_users(id) ON DELETE CASCADE,
 state text NOT NULL CHECK(state IN ('invited','joined','declined','left')),
 joined_at timestamptz,
 left_at timestamptz,
 PRIMARY KEY(challenge_id,user_id)
);
CREATE INDEX csquest_challenge_member_user ON csquest_challenge_members(user_id);
CREATE TABLE csquest_social_notifications (
 id bigserial PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES csquest_users(id) ON DELETE CASCADE,
 actor_id uuid REFERENCES csquest_users(id) ON DELETE CASCADE,
 kind text NOT NULL CHECK(kind IN ('friend-request','friend-accepted','challenge-invite')),
 challenge_id uuid REFERENCES csquest_challenges(id) ON DELETE CASCADE,
 created_at timestamptz NOT NULL DEFAULT now(),
 read_at timestamptz
);
