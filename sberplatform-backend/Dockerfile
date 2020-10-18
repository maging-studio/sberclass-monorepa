FROM node:10.14-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN apk add --no-cache --virtual .build-deps make gcc g++ python \
    && yarn \
    && apk del .build-deps

COPY . .
EXPOSE 3000
CMD yarn start:prod
