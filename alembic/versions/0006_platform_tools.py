"""Add platform roles, Library organization tools and issue reporting."""
from pathlib import Path
from alembic import op
revision = "0006_platform_tools"
down_revision = "0005_library_access"
branch_labels = None
depends_on = None


def upgrade():
    op.execute(Path(__file__).resolve().parents[2].joinpath("migrations/006-platform-tools.sql").read_text())
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('006-platform-tools.sql') ON CONFLICT(name) DO NOTHING")


def downgrade():
    raise RuntimeError("Restore a verified backup instead of dropping roles and user reports.")
