## Docker setup

- install docker
- install postgres
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5433:5432 postgres
- Build the image `docker build -t user-project .`
-Start the image `docker roun -p 3000:3000 user-project`


## Docker-compose Setup

- install docker, docker-compose
- RUN `docker-compose up`