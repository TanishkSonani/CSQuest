"""Object Storage drive and configurable capacity."""
from pathlib import Path
from alembic import op
revision = "0008_library_object_storage"
down_revision = "0007_library_polish"
branch_labels = None
depends_on = None

def upgrade():
    op.execute(Path(__file__).resolve().parents[2].joinpath("migrations/008-library-object-storage.sql").read_text())
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('008-library-object-storage.sql') ON CONFLICT(name) DO NOTHING")

def downgrade():
    raise RuntimeError("Restore a verified backup instead of dropping Object Storage data.")
