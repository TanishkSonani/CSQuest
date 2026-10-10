# Private learner data

`accounts/accounts.json` is the durable local account database. It contains private profiles, salted password hashes, hashed recovery codes, hashed sessions, and each user's saved learning data. It is ignored by Git and is not served as a static file.

Keep this directory when cleaning runtime logs or updating the application. To back up the complete local account database, stop CSQuest and copy `accounts/accounts.json` to a private backup location. Individual users can export their learning data from My profile; those exports exclude password hashes, recovery codes and sessions.

Tests use temporary, isolated account directories and never modify real learner records.
