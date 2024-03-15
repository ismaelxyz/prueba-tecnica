package model

type Customer struct {
	Id               string `json:"id"`
	FirstName        string `json:"firstName"`
	LastName         string `json:"lastName"`
	Company          string `json:"company"`
	City             string `json:"city"`
	Country          string `json:"country"`
	FirstPhone       string `json:"firstPhone"`
	SecondePhone     string `json:"secondePhone"`
	Email            string `json:"email"`
	SubscriptionDate string `json:"subscriptionDate"`
	Website          string `json:"website"`
}
