FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
#RUN npm init -y
#RUN npm i express
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node","server.js" ]
