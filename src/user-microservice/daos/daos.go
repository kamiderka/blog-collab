package daos

import (
	// "user-microservice/common"
	db "user-microservice/databases"
	"user-microservice/models"
	"user-microservice/utils"
)

type User struct {
	utils *utils.Utils
}

func (u *User) GetByID(id int) (models.User, error){

	var user models.User
    result := db.UserDb.DB.First(&user, id)
    if result.Error != nil {
        return models.User{}, result.Error
    }
    return user, nil

}