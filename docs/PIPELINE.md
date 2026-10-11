# Automatic Oracle VM deployment

Pushes to `main` trigger [Test and deploy CSQuest](https://github.com/TanishkSonani/CSQuest/actions/workflows/deploy.yml). A local commit alone does not trigger GitHub; push it:

```bash
git add .
git commit -m "Describe your update"
git push origin main
```

Pull requests run checks without production deployment. You can also use **Run workflow** on the Actions page for `main`.

## What the pipeline does

1. Checks out the pushed commit and installs Node.js 22.23.3/dependencies.
2. Checks JavaScript and shell syntax, validates all courses, and runs tests against a disposable PostgreSQL 18 service. Production database credentials are never given to CI.
3. Uses a dedicated SSH deployment key to request that exact commit on the VM. The VM rejects anything except a full commit SHA and skips superseded commits that are no longer the current `main` head.
4. Extracts the commit into `/srv/csquest-data/releases/<sha>` and installs its dependencies while the previous app stays online. Browser HTML/CSS/JavaScript is served directly; no frontend compilation is required.
5. Exports a consistent pre-deployment database backup and checksum manifest under `/srv/csquest-data/backups/deploy-<timestamp>-<sha>.dump`.
6. Stops the app briefly, applies pending Node schema migrations and publishes updated course content, then starts the prepared release using a systemd drop-in.
7. Checks the database-backed session endpoint locally and through trusted public HTTPS. Actions reports success/failure.

Deployments are serialized in GitHub and with a VM file lock. Database creation and old-snapshot restores are never part of updates. Existing learner accounts/progress are preserved by the course importer.

## Credentials and VM setup

The repository secret is `CSQUEST_DEPLOY_KEY`. It contains a dedicated Ed25519 private key; do not commit it. The VM has only the public key for user `csquest-deploy`. That key is restricted to the deployment entry command, with forwarding and interactive sessions disabled. It does not reuse the administrator SSH key.

`deploy/configure-pipeline.sh` installs root-owned entry/controller scripts and the narrow sudo rule. It requires a public key file:

```bash
sudo bash deploy/configure-pipeline.sh /path/to/deployment-key.pub
```

The controller installed at `/usr/local/sbin/csquest-deploy` is fixed by the administrator. Changes to the controller in Git are not automatically installed as root; review and reinstall them with the setup script when needed. Application code and migrations run as `csquest`.

The workflow pins the verified SSH host key for `130.162.38.87`. If the VM is replaced or its host key changes, verify the new host identity and update that key. Do not disable host-key checking to bypass a mismatch.

## Releases, logs and recovery

The original `/opt/csquest` repository remains the fetch source and holds the private `.env`. Each release links to that configuration; production database files remain on the block volume. A systemd drop-in selects the active release:

```bash
sudo systemctl cat csquest
sudo journalctl -u csquest -n 100 --no-pager
sudo cat /etc/systemd/system/csquest.service.d/release.conf
```

On deployment failure after stopping the app, the controller restores the previous code selection and attempts to restart it. It does **not** automatically restore an old database: that could discard new learner writes. Schema changes should remain compatible with the previous app during rollout. If a migration makes code rollback incompatible, review the logs and pre-deployment backup before recovery.

Retained releases and backups consume disk space; monitor `df -h /srv/csquest-data` and keep off-VM copies of important backups. No automatic deletion of learner backups is configured.

After the pipeline is enabled, use GitHub pushes for normal updates. Running only `git pull` in `/opt/csquest` does not switch the currently active release. To retry deployment, rerun the workflow on the current `main` commit.
