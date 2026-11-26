"""Library transfer verification, reading progress, playlists and audit history."""
from pathlib import Path
from alembic import op
revision = "0010_library_experience"
down_revision = "0009_library_scoped_writes"
branch_labels = None
depends_on = None

def upgrade():
    op.execute(Path(__file__).resolve().parents[2].joinpath("migrations/010-library-experience.sql").read_text(encoding="utf-8"))
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('010-library-experience.sql') ON CONFLICT(name) DO NOTHING")

def downgrade():
    raise RuntimeError("Library activity and verification data must be preserved; restore a database backup to roll back.")
