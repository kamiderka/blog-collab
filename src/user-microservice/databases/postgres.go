package databases

import (
	"gorm.io/driver/postgres"
    "gorm.io/gorm"

	"fmt"

)

type PostgresDB struct {
	PostgresDB 		*gorm.DB
	Model			interface{}
	ConnectionURL 	string 
}

func (db *PostgresDB) Init() error {
	var err error

	fmt.Printf("1")
	db.PostgresDB, err = gorm.Open(postgres.Open(db.ConnectionURL), &gorm.Config{})
	fmt.Printf("2")
	if err != nil {
		return err
	}
	fmt.Printf("3")
	return db.PostgresDB.AutoMigrate(db.Model)

}


func NewPostgresDB(model interface{}, connectionURL string) *PostgresDB {
	fmt.Printf("4")
	return &PostgresDB{
		Model:          model,
		ConnectionURL:  connectionURL,
	}
}
 