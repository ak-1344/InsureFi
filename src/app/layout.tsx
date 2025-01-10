import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life Insurance",
  description: "a web3 platform to decentralise the tiresome process of life insurance claims",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
