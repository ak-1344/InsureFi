import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: "InsureFI",
  description: "InsureFi is a modern blockchain-powered platform making life insurance simple, secure, and fast, with seamless settlements and a future-ready approach.",
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
        <ToastContainer />
      </body>
    </html>
  );
}
