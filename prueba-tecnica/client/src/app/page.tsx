"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import CustomersTab from "./components/CustomersTab";
import ChartsTab from "./components/ChartsTab";

export default function Home(): React.ReactElement {
  return (
    <NextUIProvider>
      <main className="flex items-center justify-center h-screen rounded-b-lg shadow-4xl">
        <div className="w-4/5 h-4/5 bg-gray-200">
          <header className="bg-gray-900 mb-5 rounded-t-lg text-white text-center py-4">
            <Image
              className="ml-5"
              src={"https://netsocs.com/logo-netsocs-03.png"}
              alt={"Netsocs logo"}
              width={40}
              height={40}
            />
          </header>
          <Tabs aria-label="Options">
            <Tab key="0" title="Customers">
              <CustomersTab />
            </Tab>
            <Tab key="1" title="Charts">
              <ChartsTab />
            </Tab>
          </Tabs>
          <footer className="bg-gray-900 text-white text-center rounded-b-lg py-3">
            {" "}
            <p> Netsocs 2024 </p>{" "}
          </footer>
        </div>
      </main>
    </NextUIProvider>
  );
}
