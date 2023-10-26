FROM node:20-slim as base

WORKDIR /app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .


FROM base as unit
RUN npm run test:unit

FROM mcr.microsoft.com/playwright:v1.39.0-jammy as e2e
WORKDIR /app
COPY --from=base /app .
RUN npm run test:e2e

FROM base as build
RUN npm run build

FROM nginx:latest as prod
COPY --from=build /app/dist/ /usr/share/nginx/html
