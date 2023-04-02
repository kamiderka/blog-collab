package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name		string `json:"name"`
	Password 	string `gorm:"unique" json:"password"`
	Role		string `json:"role" gorm:"default:'user'"`
	
}

type AddUserDTO struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}
