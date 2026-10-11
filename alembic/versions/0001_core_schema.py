"""Create the core CSQuest tables.

Revision ID: 0001_core_schema
Revises:
"""
from pathlib import Path

from alembic import op

revision = "0001_core_schema"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    root = Path(__file__).resolve().parents[2]
    sql = (root / "migrations" / "001-postgres.sql").read_text(encoding="utf-8")
    for statement in sql.split(";"):
        if statement.strip():
            op.execute(statement)


def downgrade():
    op.execute("DROP TABLE IF EXISTS csquest_login_attempts, csquest_sessions, csquest_user_data, csquest_users, csquest_course_status, csquest_course_documents, csquest_course_modules, csquest_courses CASCADE")
