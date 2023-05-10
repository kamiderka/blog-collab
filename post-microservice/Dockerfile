FROM golang:1.19-alpine as builder

WORKDIR /post-microservice/

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 go build -o post-microservice /post-microservice/main.go

FROM alpine:latest

RUN apk add --no-cache libc6-compat

WORKDIR /post-microservice

COPY --from=builder /post-microservice/ /post-microservice/

CMD ./post-microservice
