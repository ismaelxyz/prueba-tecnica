import React, { useEffect } from "react";
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
import { useCollator } from "react-aria";


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
  const [page, setPage] = React.useState(1);
  const pages = 10000;
  let collator = useCollator();

  let list = useAsyncList<Customer>({
    async load({ signal }) {
      console.log('Load data ', page);
      let res = await fetch(`/api/pages/${page}`, {
        signal,
      });

      let json = await res.json();
      setIsLoading(false);
      
      return {
        items: json.page.rows,
      };
    },

    async sort({ items, sortDescriptor }: SortTing) {
      return {
        items: items.sort((a, b) => {
          let cmp;
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          
          if (sortDescriptor.column === "subscriptionDate") {
            cmp = collator.compare(new Date(first), new Date(second));
          } else {
            cmp = collator.compare(first, second);
          }

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });
  
  useEffect(() => {
    setIsLoading(true);
    
    console.log('xch: ', page, ' - ',  list.items.length);
    list.reload();  
  }, [page]);

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
            onChange={(c) => console.log('It is C', c)}
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
              onChange={(newPage) => setPage(newPage)}
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
        items={list.items}
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
