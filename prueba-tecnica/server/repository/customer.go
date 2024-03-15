package repository

import (
	"fmt"
	"server/model"

	"github.com/xuri/excelize/v2"
)

type CustomerPageRepo struct {
	excelDB *excelize.File
}

func MakeCustomerRepo(exelPath string) (CustomerPageRepo, error) {
	var repo CustomerPageRepo

	dbFile, err := excelize.OpenFile(exelPath)
	if err != nil {
		return repo, fmt.Errorf("error opening the file: %w", err)
	}

	repo = CustomerPageRepo{excelDB: dbFile}

	return repo, nil
}

func (r *CustomerPageRepo) GetPageByIndex(index int) (model.Page, error) {
	var page model.Page

	startRow := (index-1)*10 + 1
	endRow := index * 10

	rows, err := r.excelDB.GetRows("customers-100000")
	if err != nil {
		return page, fmt.Errorf("error getting the rows of the sheet: %w", err)
	}

	var pageRows []model.Customer
	for i, row := range rows {
		if i+1 >= startRow && i+1 <= endRow {
			customer := model.Customer{
				Id:               row[1],
				FirstName:        row[2],
				LastName:         row[3],
				Company:          row[4],
				City:             row[5],
				Country:          row[6],
				FirstPhone:       row[7],
				SecondePhone:     row[8],
				Email:            row[9],
				SubscriptionDate: row[10],
				Website:          row[11],
			}
			pageRows = append(pageRows, customer)
		}
	}

	page = model.Page{Rows: pageRows}
	return page, nil
}
