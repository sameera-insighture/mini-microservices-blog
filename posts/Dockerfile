FROM node:21-alpine3.18

RUN mkdir /app

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]