
FROM node:alpine

ENV APP_DIR /app

WORKDIR "${APP_DIR}"

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "/app/index.js"]



