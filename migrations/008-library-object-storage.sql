ALTER TABLE csquest_library_entries DROP CONSTRAINT csquest_library_entries_drive_check;
ALTER TABLE csquest_library_entries ADD CONSTRAINT csquest_library_entries_drive_check CHECK(drive IN ('boot','block','object'));
ALTER TABLE csquest_library_public_links DROP CONSTRAINT csquest_library_public_links_drive_check;
ALTER TABLE csquest_library_public_links ADD CONSTRAINT csquest_library_public_links_drive_check CHECK(drive IN ('boot','block','object'));
ALTER TABLE csquest_library_entries ADD COLUMN object_upload jsonb;
ALTER TABLE csquest_library_entries ADD COLUMN object_key text;
CREATE UNIQUE INDEX csquest_library_object_keys ON csquest_library_entries(object_key) WHERE drive='object' AND object_key IS NOT NULL;
CREATE TABLE csquest_library_drive_settings(
 drive text PRIMARY KEY CHECK(drive='object'),
 quota_bytes bigint NOT NULL CHECK(quota_bytes>0),
 updated_by uuid REFERENCES csquest_users(id) ON DELETE SET NULL,
 updated_at timestamptz NOT NULL DEFAULT now()
);
