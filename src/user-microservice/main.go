package main

import (
	"fmt"
	"net/http"
	"user-microservice/common"
	//"user-microservice/databases"
	"user-microservice/models"

	"github.com/gin-gonic/gin"

	"gorm.io/driver/postgres"
    "gorm.io/gorm"
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

	fmt.Printf("5")
	// Initialize User database
	postgresDB, err := gorm.Open(postgres.Open(common.Config.UserPostgresURL), &gorm.Config{})
	fmt.Printf("2")
	if err != nil {
		return err
	}
	fmt.Printf("3")
	postgresDB.AutoMigrate(&models.User{})

	postgresDB.Create(models.User{Name: "Bob", HashedPassword: "password123"})
	
	m.router = gin.Default()

	return nil
}


func main() {
	
	m := Main{}

    if m.initServer() != nil {
		return
	}

	m.router.GET("/", func(c *gin.Context) {
		
		user := models.User{Name: "kamil", HashedPassword: "password123"}

		c.JSON(http.StatusOK, user)
	  
	})

	m.router.Run(common.Config.Port)
}