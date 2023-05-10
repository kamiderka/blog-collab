build:
    docker build -t frontend ./frontend
    docker build -t post-microservice ./post-microservice
    docker build -t user-microservice ./user-microservice