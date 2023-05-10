package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name		string `gorm:"unique" json:"name"` 
	Password 	string `json:"password"`
	Role		string `json:"role" gorm:"default:'user'"`
	
}

type AddUserDTO struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

type LoginUserDTO struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

type ReturnUserDTO struct {
	gorm.Model
	Name		string `gorm:"unique" json:"name"` 
	Role		string `json:"role" gorm:"default:'user'"`

}