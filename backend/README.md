# APIs
## setup db
`docker compose up -d`\
`npm i -g sequelize-cli ` \
`sequelize db:create`\
`sequelize db:migrate`\
`sequelize db:seed:all`

## setup local dev
`npm run dev`

## get containers
`docker ps`

## use mysql inside container
`docker exec -it 3b75aa4a9bfa mysql -u root -p`

## build backend docker image
`docker build -t jackietian/hotel-booking-system-backend-api .`