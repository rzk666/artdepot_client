FROM node:12.16.1

WORKDIR ./app
COPY package.json ./package.json
RUN npm install
COPY ./build ./
COPY .env.staging .env
EXPOSE 8080

CMD [ "npm", "run", "startServer" ]