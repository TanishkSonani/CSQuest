"""Create social and competition tables.

Revision ID: 0002_social_schema
Revises: 0001_core_schema
"""
from pathlib import Path

from alembic import op

revision = "0002_social_schema"
down_revision = "0001_core_schema"
branch_labels = None
depends_on = None


def upgrade():
    root = Path(__file__).resolve().parents[2]
    sql = (root / "migrations" / "002-social.sql").read_text(encoding="utf-8")
    for statement in sql.split(";"):
        if statement.strip():
            op.execute(statement)


def downgrade():
    op.execute("DROP TABLE IF EXISTS csquest_social_notifications, csquest_challenge_members, csquest_challenges, csquest_league_entries, csquest_activity_events, csquest_friendships, csquest_social_profiles CASCADE")
