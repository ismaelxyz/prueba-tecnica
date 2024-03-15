import React from "react";
import { useAsyncList } from "@react-stately/data";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  Spinner,
  SortDescriptor,
  Input,
} from "@nextui-org/react";
import Customer from "../api/models/Customers";

const ROWS: Customer[] = [
  {
    key: "1",
    id: "1a2b3c4d",
    firstName: "John",
    lastName: "Doe",
    company: "Acme Inc.",
    city: "New York",
    country: "USA",
    firstPhone: "123-456-7890",
    secondePhone: "",
    email: "john.doe@example.com",
    subscriptionDate: "2024-03-14",
    website: "www.acme.com",
  },
  {
    key: "2",
    id: "5e6f7g8h",
    firstName: "Alice",
    lastName: "Smith",
    company: "Smith & Co.",
    city: "Los Angeles",
    country: "USA",
    firstPhone: "987-654-3210",
    secondePhone: "",
    email: "alice.smith@example.com",
    subscriptionDate: "2024-03-14",
    website: "www.smithco.com",
  },
  {
    key: "3",
    id: "9i8j7k6l",
    firstName: "Bob",
    lastName: "Johnson",
    company: "Johnson Enterprises",
    city: "Chicago",
    country: "USA",
    firstPhone: "111-222-3333",
    secondePhone: "444-555-6666",
    email: "bob.johnson@example.com",
    subscriptionDate: "2024-03-14",
    website: "www.johnsonent.com",
  },
  {
    key: "4",
    id: "mno123xyz",
    firstName: "Emily",
    lastName: "Brown",
    company: "Brown Corp",
    city: "London",
    country: "UK",
    firstPhone: "999-888-7777",
    secondePhone: "",
    email: "emily.brown@example.com",
    subscriptionDate: "2024-03-14",
    website: "www.browncorp.co.uk",
  },
  {
    key: "5",
    id: "456abc789",
    firstName: "Michael",
    lastName: "Nguyen",
    company: "Nguyen Ltd.",
    city: "Sydney",
    country: "Australia",
    firstPhone: "333-444-5555",
    secondePhone: "",
    email: "michael.nguyen@example.com",
    subscriptionDate: "2024-03-14",
    website: "www.nguyenltd.com.au",
  },
];

const COLUMNS = [
  { key: "id", label: "Customer Id" },
  { key: "firstName", label: "First Name", asSort: true },
  { key: "lastName", label: "Last Name" },
  { key: "company", label: "Company" },
  { key: "city", label: "City" },
  { key: "country", label: "Country" },
  { key: "firstPhone", label: "Phone 1" },
  { key: "secondePhone", label: "Phone 2" },
  { key: "email", label: "Email" },
  { key: "subscriptionDate", label: "Subscription Date", asSort: true },
  { key: "website", label: "Website" },
];

interface SortTing {
  items: Customer[];
  sortDescriptor: SortDescriptor;
}

export default function CustomersTab() {
  const [isLoading, setIsLoading] = React.useState(true);
  // setPage(page)
  const pages = 100;
  const page = 1;

  let list = useAsyncList({
    async load({ signal }) {
      /*
      let res = await fetch("https://swapi.py4e.com/api/people/?search", {
        signal,
      });*/

      let json = { results: ROWS }; // await res.json();
      setIsLoading(false);

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          // console.log(a[sortDescriptor.column]);
          let first = a[sortDescriptor.column]; // a[sortDescriptor.column ?? 0];
          let second = b[sortDescriptor.column]; // b[sortDescriptor.column];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      color={"primary"}
      selectionMode="single"
      isStriped
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      classNames={{
        table: "min-h-[400px]",
      }}
      aria-label="Customers Table"
      topContentPlacement="outside"
      topContent={
        <div className="flex w-full justify-end">
          <Input
            key="1"
            radius="full"
            type="text"
            label="Customer search"
            placeholder="Enter Customer Data"
            className="max-w-[220px]"
          />
        </div>
      }
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => null}
            />
          </div>
        ) : null
      }
    >
      <TableHeader columns={COLUMNS}>
        {(column) => (
          <TableColumn key={column.key} allowsSorting={!!column.asSort}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={ROWS}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
