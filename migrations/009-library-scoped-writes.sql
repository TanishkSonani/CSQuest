ALTER TABLE csquest_users ADD COLUMN account_type text NOT NULL DEFAULT 'learner' CHECK(account_type IN ('learner','library'));
ALTER TABLE csquest_library_access ADD COLUMN can_write boolean NOT NULL DEFAULT false;
