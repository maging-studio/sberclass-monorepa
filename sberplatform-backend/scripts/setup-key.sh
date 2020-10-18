mkdir -p ~/.ssh
cat $PWD/scripts/key.pem > $SSH_DEPLOY_KEY_PATH
chmod og-rwx $SSH_DEPLOY_KEY_PATH