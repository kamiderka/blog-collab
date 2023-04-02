package main

import (
	"net/http"
	"user-microservice/common"
	db "user-microservice/databases"
	"user-microservice/models"

	"github.com/gin-gonic/gin"
	"user-microservice/daos"
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

		user := &models.User{Name: "Mark", Password: "password123"}

		db.UserDb.DB.Create(user)

		var userDAO daos.User
		
		user_dao, err := userDAO.Login("Mark", "password123") 
		
		if err != nil{
			return 
		}

		c.JSON(http.StatusOK, user_dao)

	})

	m.router.Run(common.Config.Port)
}
