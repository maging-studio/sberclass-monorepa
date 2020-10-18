$PWD/scripts/setup-key.sh

ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker login $DOCKER_REPO --username $DOCKER_USER --password $DOCKER_PASSWORD"

ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker pull $DOCKER_IMAGE_ADDRESS"
ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker rm -f $DOCKER_CONTAINER_NAME || true"

ssh -o StrictHostKeyChecking=no -i $SSH_DEPLOY_KEY_PATH $DEPLOY_SERVER "sudo docker run -d -p $PORT:3002 --network host --name $DOCKER_CONTAINER_NAME $DOCKER_IMAGE_ADDRESS"