package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"user-microservice/models"
	"user-microservice/common"
)

type Main struct {
	router *gin.Engine
}

func (m *Main) initServer() error {
	var err error

	// Load config file
	err = common.LoadConfig()
	if err != nil {
		return err
	}

	// // Initialize User database
	// err = databases.Database.Init()
	// if err != nil {
	// 	return err
	// }

	m.router = gin.Default()

	return nil
}


func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		
		user := models.User{Name: "kamil", HashedPassword: "password123"}

		c.JSON(http.StatusOK, user)
	  
	})

	r.Run(":9090")
}