package databases

import(
	 "user-microservice/common"
	 "user-microservice/models"
)

var (
	UserDb = NewPostgresDB(&models.User{}, common.Config.UserPostgresURL)
)