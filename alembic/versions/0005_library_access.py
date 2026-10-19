"""Add Library member permissions and revocable public file links."""
from pathlib import Path
from alembic import op

revision = "0005_library_access"
down_revision = "0004_library"
branch_labels = None
depends_on = None


def upgrade():
    op.execute(Path(__file__).resolve().parents[2].joinpath("migrations/005-library-access.sql").read_text())
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('005-library-access.sql') ON CONFLICT(name) DO NOTHING")


def downgrade():
    raise RuntimeError("Restore a verified backup instead of dropping Library permissions and links.")
