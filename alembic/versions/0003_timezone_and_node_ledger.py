"""Add profile time zones and align the Node importer migration ledger.

Revision ID: 0003_timezone_ledger
Revises: 0002_social_schema
"""
from alembic import op

revision = "0003_timezone_ledger"
down_revision = "0002_social_schema"
branch_labels = None
depends_on = None


def upgrade():
    op.execute("ALTER TABLE csquest_social_profiles ADD COLUMN time_zone text NOT NULL DEFAULT 'UTC'")
    op.execute("CREATE TABLE IF NOT EXISTS csquest_migrations(name text PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now())")
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('001-postgres.sql'), ('002-social.sql'), ('003-social-timezone.sql') ON CONFLICT(name) DO NOTHING")


def downgrade():
    op.execute("DROP TABLE IF EXISTS csquest_migrations")
    op.execute("ALTER TABLE csquest_social_profiles DROP COLUMN IF EXISTS time_zone")
