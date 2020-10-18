$PWD/scripts/setup-key.sh

ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker login $DOCKER_REPO --username $DOCKER_USER --password $DOCKER_PASSWORD"

rsync -avh ./docker-compose.yml -e "ssh -i $SSH_DEPLOY_KEY_PATH" --include './docker-compose.yml' $DEPLOY_PATH

ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker pull $DOCKER_IMAGE_ADDRESS"
ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "cd $DEPLOY_SERVER_DIR && sudo docker-compose build && sudo docker-compose up -d"