docker login -u $DOCKER_USER -p $DOCKER_PASSWORD $DOCKER_REPO
docker build -t $DOCKER_IMAGE .
docker tag $DOCKER_IMAGE:latest $DOCKER_IMAGE_ADDRESS:latest
docker push $DOCKER_IMAGE_ADDRESS