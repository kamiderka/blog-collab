package common

import (
	"encoding/json"
	"os"

)

// Configuration stores setting values
type Configuration struct {
	Port				string `json:"port"`

	UserPostgresURL		string `json:"userPostgresURL"`

	JwtSecretPassword	string `json:"jwtSecretPassword"`
	Issuer				string `json:"issuer"`
}

// Config shares the global configuration
var (
	Config *Configuration
)

// Status Text
const (
	ErrNameEmpty      = "Name is empty"
	ErrPasswordEmpty  = "Password is empty"
)

// Status Code
const (
	StatusCodeUnknown = -1
)


// LoadConfig loads configuration from the config file
func LoadConfig() error {
	
	// Filename is the path to the json config file
	file, err := os.Open("config/config.json")
	if err != nil {
		return err
	}

	Config = new(Configuration)
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&Config)
	if err != nil {
		return err
	}

	return nil
}
