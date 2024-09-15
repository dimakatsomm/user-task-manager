FROM node:20

WORKDIR /app

COPY ./package*.json /app/
RUN npm ci

COPY . /app
RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "dev" ]

