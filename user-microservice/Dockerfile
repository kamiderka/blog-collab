FROM golang:1.19-alpine as builder

WORKDIR /user-microservice/

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 go build -o user-microservice /user-microservice/main.go

FROM alpine:latest

RUN apk add --no-cache libc6-compat

WORKDIR /user-microservice

COPY --from=builder /user-microservice/ /user-microservice/

CMD ./user-microservice
