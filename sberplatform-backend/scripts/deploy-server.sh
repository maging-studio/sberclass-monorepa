$PWD/scripts/upload.sh

ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker build -t $DOCKER_IMAGE $DEPLOY_SERVER_DIR"
ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker run -d -p  $PORT:3000 --network host $DOCKER_IMAGE"

