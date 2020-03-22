FROM node:current-slim
WORKDIR /usr/src/nav-bar-service
COPY . .
RUN yarn install
EXPOSE 3001
CMD [ "yarn", "run", "start" ]