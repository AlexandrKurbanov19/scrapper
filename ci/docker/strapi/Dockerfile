FROM node:16.15.1

RUN apt-get update && \
    apt-get install -y nano openssl curl

RUN curl -o- -L https://yarnpkg.com/install.sh | sh
RUN mkdir /app
WORKDIR /app
COPY ./lms-app-strapi/package.json ./
COPY ./lms-app-strapi/yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile

COPY ./lms-app-strapi/ /app
ENV NODE_ENV production

RUN yarn build

CMD yarn cs:import -y && yarn run start
