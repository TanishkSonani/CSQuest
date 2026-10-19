"""Add the private Library inventory and resumable upload reservations."""
from pathlib import Path
from alembic import op

revision = "0004_library"
down_revision = "0003_timezone_ledger"
branch_labels = None
depends_on = None


def upgrade():
    # Share the schema with the existing Node migration runner.
    op.execute(Path(__file__).resolve().parents[2].joinpath("migrations/004-library.sql").read_text())
    op.execute("INSERT INTO csquest_migrations(name) VALUES ('004-library.sql') ON CONFLICT(name) DO NOTHING")


def downgrade():
    raise RuntimeError("Library inventory contains durable file references. Restore a verified backup instead of dropping it.")
