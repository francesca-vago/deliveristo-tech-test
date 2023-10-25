FROM node:20-slim as build

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist/ /usr/share/nginx/html
