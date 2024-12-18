FROM node:20


RUN apt-get -y update

WORKDIR /app/server

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]








