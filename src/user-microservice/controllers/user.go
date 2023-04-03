package controllers

import (
	// "fmt"
	"net/http"

	"user-microservice/common"
	"user-microservice/daos"
	"user-microservice/models"
	"user-microservice/utils"

	"github.com/gin-gonic/gin"
)

// User manages
type User struct {
	utils   utils.Utils
	userDAO daos.User
}


func (u *User) Authenticate(ctx *gin.Context) {
	var req models.AddUserDTO
    if err := ctx.BindJSON(&req); err != nil {
		ctx.JSON(http.StatusInternalServerError, models.Error{common.StatusCodeUnknown, err.Error()})
        return
    }

	username := req.Name
	password := req.Password
	
	var err error
	user , err := u.userDAO.Login(username, password)

	if err == nil {
		var tokenString string

		tokenString, err = u.utils.GenerateJWT(username, user.Role)
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