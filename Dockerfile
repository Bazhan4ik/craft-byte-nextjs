FROM node:18

RUN mkdir -p /app

COPY package*.json ./app

WORKDIR /app

RUN npm install

COPY . /app

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "dev" ]