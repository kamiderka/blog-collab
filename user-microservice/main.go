package main

import (
	"fmt"
	"user-microservice/common"
	"user-microservice/controllers"
	db "user-microservice/databases"

	"github.com/gin-gonic/contrib/jwt"
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
		fmt.Println(err.Error())
		return err
	}


	err = db.UserDb.Init()
	if err != nil {
		fmt.Println("DB")
		return err
	}


	m.router = gin.Default()
	fmt.Println("Router")
	return nil
}

func main() {

	m := Main{}

	if m.initServer() != nil {
		fmt.Println("EEEEe")
		return 
	}

	c := controllers.User{}
	v1 := m.router.Group("/api/v1") 
	{

		// fix permissions! 
		user := v1.Group("/user")
		{
			user.POST("/auth", c.Authenticate)
			user.POST("/register", c.AddUser)

			user.GET("detail/:id", c.GetUserByID)
			// user.GET("/", c.GetUserByParams)
			user.DELETE(":id", c.DeleteUserByID)
		}

		user.Use(jwt.Auth(common.Config.JwtSecretPassword))
		{


		} 

	}

	m.router.Run(common.Config.Port)
}