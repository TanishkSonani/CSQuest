"""Scoped Library access and password-protected public upload spaces."""
from pathlib import Path
from alembic import op
revision = "0007_library_polish"
down_revision = "0006_platform_tools"
branch_labels = None
depends_on = None

def upgrade():
    op.execute(Path(__file__).resolve().parents[2].joinpath("migrations/007-library-polish.sql").read_text())
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('007-library-polish.sql') ON CONFLICT(name) DO NOTHING")

def downgrade():
    raise RuntimeError("Restore a verified backup instead of dropping Library access data.")
