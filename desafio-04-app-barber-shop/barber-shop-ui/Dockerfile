FROM node:22.14.0

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /barber-shop-ui

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN npm i -g @angular/cli@19.2.4  --save-dev

RUN npm install

COPY . .
