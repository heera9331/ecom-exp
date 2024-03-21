"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/index";
import { store } from "@/redux/store/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Provider store={store}>
          <Header />
          <div className="min-h-[90vh] px-4">
            {children}
          </div>
          <Footer />
        </Provider>,
      </body>
    </html>
  );
}
