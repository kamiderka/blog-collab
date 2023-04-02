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

func (u *User) DeleteByID(id int) error {
    
	result := db.UserDb.DB.Delete(&models.User{}, id)
    if result.Error != nil {
        return result.Error
    }
    return nil
}

func (u *User) Login(name string, password string) (models.User, error){

	var user models.User
    err := db.UserDb.DB.Where("name = ? AND password >= ?", name, password).First(&user).Error
    if err != nil {
        return models.User{}, err
    }
    return user, nil
}

func (u *User) Insert(user models.User) error {
    

	
	result := db.UserDb.DB.Create(&user)
    if result.Error != nil {
        return result.Error
    }
    return nil
}

func (u *User) Delete(user models.User) error{
	result := db.UserDb.DB.Delete(&user)
    if result.Error != nil {
        return result.Error
    }
    return nil
}

// func (u *User) Update(user models.User) error {
// 	result := db.UserDb.DB.Create(&user)
//     if result.Error != nil {
//         return result.Error
//     }
//     return nil
// }