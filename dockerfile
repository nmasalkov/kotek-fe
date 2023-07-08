# kotek-fe Dockerfile
FROM node:15-alpine as kotek-fe-builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
