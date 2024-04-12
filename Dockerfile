FROM node:21-alpine

WORKDIR /swi-autoservice
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev