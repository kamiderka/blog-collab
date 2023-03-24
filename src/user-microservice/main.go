package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"user-microservice/models"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		
		user := models.User{Name: "kamil", HashedPassword: "password123"}

		c.JSON(http.StatusOK, user)
	  
	})

	r.Run(":9090")
}