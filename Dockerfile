FROM node:current-slim
WORKDIR /nav-bar-service
COPY . .
RUN yarn install
EXPOSE 3001
CMD [ "yarn", "run", "start" ]