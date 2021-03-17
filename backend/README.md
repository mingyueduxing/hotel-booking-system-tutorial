# APIs

## setup local dev
`docker-compose up -d`\
`npm i & npm start`

## get containers
`docker ps`

## use mysql inside container
`docker exec -it 3b75aa4a9bfa mysql -u root -p`

## build backend docker image
`docker build -t jackietian/hotel-booking-system-backend-api .`