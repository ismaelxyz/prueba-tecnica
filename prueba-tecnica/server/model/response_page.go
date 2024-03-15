package model

type ResponsePage struct {
	Status string      `json:"status"`
	Page   interface{} `json:"page"`
}
