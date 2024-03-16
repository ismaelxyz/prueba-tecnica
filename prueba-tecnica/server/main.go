package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"server/model"
	"server/repository"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

var customerRepo repository.CustomerPageRepo

func getPage(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	indexStr := vars["index"]
	index, err := strconv.Atoi(indexStr)
	var response model.ResponsePage
	status := "ok"

	if err != nil {
		log.Printf("Page Index error: %v", err)
		w.WriteHeader(http.StatusBadRequest)
		status = "BadRequest"
	}

	page, err := customerRepo.GetPageByIndex(index)

	if err != nil {
		log.Printf("Page Index error: %v", err)
		w.WriteHeader(http.StatusBadRequest)
		status = "BadRequest"
	}

	w.Header().Set("Content-Type", "application/json")
	response = model.ResponsePage{Status: status, Page: page}

	json.NewEncoder(w).Encode(response)
}

// func getFilter(w http.ResponseWriter, r *http.Request) { }

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("env load error: ", err)
	}

	customerRepo, err = repository.MakeCustomerRepo(os.Getenv("EXEL_DB_PATH"))

	if err != nil {
		log.Fatal("Connection error", err)
	}

}

func main() {
	router := mux.NewRouter()
	fmt.Println("Starting the application...")

	router.HandleFunc("/pages/{index}", getPage).Methods("GET")
	log.Fatal(http.ListenAndServe(":12345", router))

}
