package utils

import (
	"errors"
	"strconv"
	"time"
	"post-microservice/common"

	jwt_lib "github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

type Utils struct {
}

type SdtClaims struct {
	Name string `json:"name"`
	Role string `json:"role"`
	jwt_lib.StandardClaims
}

func (u *Utils) GenerateJWT(name string, role string) (string, error) {
	claims := SdtClaims{
		name,
		role,
		jwt_lib.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 1).Unix(),
			Issuer:    common.Config.Issuer,
		},
	}

	token := jwt_lib.NewWithClaims(jwt_lib.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(common.Config.JwtSecretPassword))

	return tokenString, err
}


func (u *Utils) HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
    return string(bytes), err
}

func (u *Utils) CheckPasswordHash(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}

func (u *Utils) StrToUint(str string) (uint, error) {
	
	i, err := strconv.Atoi(str)
	if err != nil {
		return 0, err
	}

	if i < 0 {
		return 0, errors.New("ID should be greater than 0.")
	}

	return uint(i), nil 
}