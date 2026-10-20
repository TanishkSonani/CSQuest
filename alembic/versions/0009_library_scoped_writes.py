"""Library-only accounts and location write permissions."""
from pathlib import Path
from alembic import op
revision = "0009_library_scoped_writes"
down_revision = "0008_library_object_storage"
branch_labels = None
depends_on = None

def upgrade():
    op.execute(Path(__file__).resolve().parents[2].joinpath("migrations/009-library-scoped-writes.sql").read_text())
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('009-library-scoped-writes.sql') ON CONFLICT(name) DO NOTHING")

def downgrade():
    raise RuntimeError("Restore a verified backup instead of removing account permissions.")
