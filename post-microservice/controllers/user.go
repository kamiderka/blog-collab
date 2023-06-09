package controllers

import (
	// "fmt"
	"net/http"

	"post-microservice/common"
	"post-microservice/daos"
	"post-microservice/models"
	"post-microservice/utils"

	"github.com/gin-gonic/gin"
)

// User manages
type User struct {
	utils   utils.Utils
	userDAO daos.User
}


func (u *User) Authenticate(ctx *gin.Context) {
	var loginDTO models.LoginUserDTO
    if err := ctx.BindJSON(&loginDTO); err != nil {
		ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
        return
    }
	
	var err error
	user , err := u.userDAO.Login(loginDTO.Name, loginDTO.Password)

	if err == nil {
		var tokenString string

		tokenString, err = u.utils.GenerateJWT(user.Name, user.Role)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
			return
		}

		token := models.Token{tokenString}
		ctx.JSON(http.StatusOK, token)
	} else {
		ctx.JSON(http.StatusUnauthorized, err.Error())
	}
}

func (u *User) AddUser(ctx *gin.Context) {
	var addUserDTO models.AddUserDTO
	if err := ctx.BindJSON(&addUserDTO); err != nil {
		ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
		return
	}

	user := models.User{Name: addUserDTO.Name, Password: addUserDTO.Password}
	err := u.userDAO.Insert(user)
	if err == nil {
		ctx.JSON(http.StatusOK, models.Message{"Successfully"})
	} else {
		ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
	}
}

func (u *User) GetUserByID(ctx *gin.Context) {
	var user models.User
	var err error

	id, err := u.utils.StrToUint( ctx.Params.ByName("id") ) 
    if err != nil {
        ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
		return 
    }

	user, err = u.userDAO.GetByID(id)
	
	if err == nil {
		ctx.JSON(http.StatusOK, user)
	} else {
		ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
	}
}

func (u *User) DeleteUserByID(ctx *gin.Context) {
	var user models.User
	var err error

	id, err := u.utils.StrToUint( ctx.Params.ByName("id") ) 
    if err != nil {
        ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
		return 
    }

	err = u.userDAO.DeleteByID(id)
	
	if err == nil {
		ctx.JSON(http.StatusOK, user)
	} else {
		ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
	}
}