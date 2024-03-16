package repository

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

const TEST_FILE string = "../../data/customers-100000.xlsx"

// TestMakeCustomerRepo tests the creation of a CustomerPageRepo.
func TestMakeCustomerRepo(t *testing.T) {
	repo, err := MakeCustomerRepo(TEST_FILE)
	assert.Nil(t, err)
	assert.NotNil(t, repo.excelDB)
}

// TestGetPageByIndex tests the retrieval of a page by index.
func TestGetPageByIndex(t *testing.T) {
	repo, _ := MakeCustomerRepo(TEST_FILE)
	page, err := repo.GetPageByIndex(1)
	assert.Nil(t, err)
	assert.Equal(t, 10, len(page.Rows))
}

// TestMakeCustomerRepoErrorHandling tests the error handling of MakeCustomerRepo.
func TestMakeCustomerRepoErrorHandling(t *testing.T) {
	_, err := MakeCustomerRepo("nonexistent.xlsx")
	assert.NotNil(t, err)
}

// TestGetPageByIndexOutOfBounds tests the behavior when the index is out of bounds.
func TestGetPageByIndexOutOfBounds(t *testing.T) {
	repo, _ := MakeCustomerRepo(TEST_FILE)
	_, err := repo.GetPageByIndex(0) // Index 0 is out of bounds
	assert.NotNil(t, err)
	_, err = repo.GetPageByIndex(-1) // Negative index is out of bounds
	assert.NotNil(t, err)
}

// TestGetPageByIndexEmptyPage tests the retrieval of a page that should be empty.
func TestGetPageByIndexEmptyPage(t *testing.T) {
	repo, _ := MakeCustomerRepo(TEST_FILE)
	page, err := repo.GetPageByIndex(10) // Assuming this index is beyond the data range
	assert.Nil(t, err)
	assert.Equal(t, 0, len(page.Rows))
}

// TestCustomerPageRepoDataIntegrity tests the integrity of the data retrieved by GetPageByIndex.
func TestCustomerPageRepoDataIntegrity(t *testing.T) {
	repo, _ := MakeCustomerRepo(TEST_FILE)
	page, err := repo.GetPageByIndex(1)
	assert.Nil(t, err)
	for _, customer := range page.Rows {
		assert.NotEmpty(t, customer.Id)
		assert.NotEmpty(t, customer.FirstName)
	}
}
