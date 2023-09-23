FROM node:18.17.1-alpine AS build_stage

RUN apk add --update python3 build-base

COPY src /app/src
COPY uploads /app/uploads
COPY package.json /app
COPY package-lock.json /app
COPY tsconfig.json /app
COPY tsconfig.build.json /app
COPY nest-cli.json /app

WORKDIR /app
RUN npm ci

# Exclude client from nest build
RUN mv src/client ..
RUN npm run build

# Ensure dist/server hierarchy
RUN mv dist server
RUN mkdir dist
RUN mv server dist

# Include image assets in build folder
RUN npm run copy:assets

# Re-include client for vite build
RUN mv ../client src
RUN npm run build:client

# Prep for runtime image
RUN rm -rf node_modules
RUN rm -rf test
RUN npm ci --only=production
RUN rm -rf src

FROM node:18.17.1-alpine AS runtime_stage

COPY --from=build_stage /app /app

CMD [ "node", "/app/dist/server/main.js" ]
