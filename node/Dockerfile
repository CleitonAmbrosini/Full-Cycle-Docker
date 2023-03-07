# pull the Node.js Docker image
FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "./src/index.js" ]