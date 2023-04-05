package main

import (
	// "net/http"
	"user-microservice/common"
	db "user-microservice/databases"
	// "user-microservice/models"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/contrib/jwt"
	// "user-microservice/daos"
	// "user-microservice/utils"
	"user-microservice/controllers"

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

	c := controllers.User{}
	v1 := m.router.Group("/api/v1") 
	{

		admin := v1.Group("/admin")
		{
			admin.POST("/auth", c.Authenticate)

			// user.GET("/list", c.ListUsers)
			// user.GET("detail/:id", c.GetUserByID)
			// user.GET("/", c.GetUserByParams)
			// user.DELETE(":id", c.DeleteUserByID)

		}


		// PAMIĘTAJ O APLIKACJI, MORDO! 

		user := v1.Group("/users")


		user.Use(jwt.Auth(common.Config.JwtSecretPassword))
		{

			user.POST("/register", c.AddUser)

		} 

	}

	m.router.Run(common.Config.Port)
}