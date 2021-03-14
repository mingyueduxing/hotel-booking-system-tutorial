# Hotel booking system tutorial

## connect to db
setup mysql in docker
`docker compose up -d`

`docker ps`

`docker exec -it 3b75aa4a9bfa mysql -u root -p`

`docker build -t jackietian/hotel-booking-system-backend-api .`

## add db models
    - hotel
    - rooms
    - reservations
    - users
