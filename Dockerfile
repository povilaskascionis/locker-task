FROM node:20.2-alpine as build-env


WORKDIR /build

COPY src /build/src
COPY tsconfig.json /build/tsconfig.json
COPY package.json /build/package.json
COPY yarn.lock /build/yarn.lock
COPY server /build/server
COPY webpack.config.js /build/webpack.config.js

RUN yarn install
RUN yarn build


FROM node:20.2-alpine

WORKDIR /app

COPY --from=build-env /build/dist /app/dist
COPY --from=build-env /build/server /app/server

RUN cd server && yarn install

WORKDIR /app/server

CMD ["yarn", "start"]
