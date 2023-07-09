FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM alpine

WORKDIR /app

COPY --from=builder /app/build .

VOLUME /app
