import type { Metadata } from "next";
import * as React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba técnica Netsocs",
  description:
    "Versión de la prueba técnica de Netsocs realizada por ismaelxyz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> {children} </body>
    </html>
  );
}
