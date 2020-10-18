# $PWD/scripts/setup-key.sh

sudo rsync -avh ./ -e "ssh -i $SSH_DEPLOY_KEY_PATH" --include './*' --exclude='node_modules/' --exclude='.git/' --exclude='.github/' --exclude='dist/' \
 --exclude='avatars/'  --exclude='dist/' $DEPLOY_PATH