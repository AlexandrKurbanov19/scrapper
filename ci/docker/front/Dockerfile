FROM node:16.15.1-alpine as build-stage

# Узнаём моща раннера
RUN apk add --update --no-cache nano openssl curl git
RUN curl -o- -L https://yarnpkg.com/install.sh | sh
RUN mkdir /app
ADD scrapper-front/package.json /app/package.json
ADD scrapper-front/yarn.lock /app/yarn.lock
WORKDIR /app
RUN yarn install --no-cache --frozen-lockfile
COPY scrapper-front/ /app/

RUN yarn tsc --noEmit
RUN yarn eslint ./src
RUN yarn test:no-watch
RUN yarn build

FROM nginx:1.15.9-alpine

ADD ci/docker/front/nginx.conf /etc/nginx/nginx.conf
ADD ci/docker/front/domain.conf /etc/nginx/sites-available/domain.conf

RUN mkdir /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/domain.conf /etc/nginx/sites-enabled/domain
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build/ /var/www/
WORKDIR /var/www/

CMD ["nginx"]
