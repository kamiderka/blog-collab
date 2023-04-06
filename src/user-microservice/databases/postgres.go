package databases

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"user-microservice/common"
	"user-microservice/models"
)

type PostgresDB struct {
	DB *gorm.DB
}

func (db *PostgresDB) Init() error {
	var err error

	db.DB, err = gorm.Open(postgres.Open(common.Config.UserPostgresURL), &gorm.Config{})

	if err != nil {
		panic(err.Error())
	}

	return db.DB.AutoMigrate(&models.User{})

}
