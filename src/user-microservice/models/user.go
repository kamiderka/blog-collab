package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name		string `json:"name"`
	Password 	string `gorm:"unique" json:"password"`
	
}

type AddUser struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}
