package main

import (
	"net/http"
	"user-microservice/common"
	db "user-microservice/databases"
	"user-microservice/models"

	"github.com/gin-gonic/gin"
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


	err = db.UserDb.Init()
	if err != nil {
		return err
	}


	m.router = gin.Default()

	return nil
}

func main() {

	m := Main{}

	if m.initServer() != nil {
		return
	}

	m.router.GET("/", func(c *gin.Context) {

		user := &models.User{Name: "Mark", HashedPassword: "password123"}

		db.UserDb.DB.Create(user)
		
		c.JSON(http.StatusOK, user)

	})

	m.router.Run(common.Config.Port)
}
