import "./globals.css";
import type { Metadata } from "next";
import { Footer, NavBar } from "@components";

export const metadata: Metadata = {
  title: "EasyDrive",
  description: "Find, book, and rent a car easily and quickly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
