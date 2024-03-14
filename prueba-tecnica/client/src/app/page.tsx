"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex items-center justify-center h-screen rounded-b-lg">
        <div className="w-4/5 h-4/5 bg-gray-200">
          <header className="bg-gray-900 mb-5 rounded-t-lg text-white text-center py-4">
            <Image
              className="ml-5"
              src={"https://netsocs.com/logo-netsocs-03.png"}
              alt={"Netsocs logo"}
              width={50}
              height={50}
            />
          </header>
          <Tabs aria-label="Options">
            <Tab key="0" title="Customers">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="1" title="Charts">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
          <footer className="bg-gray-900 text-white text-center py-4">
            {" "}
            <p> Netsocs 2024 </p>{" "}
          </footer>
        </div>
      </main>
    </NextUIProvider>
  );
}
