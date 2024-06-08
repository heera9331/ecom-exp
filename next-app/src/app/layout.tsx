"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/index";
import { store } from "@/redux/store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet"/>
      <script defer src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js"></script>
    </head>
    <body>
    <SessionProvider>
      <Provider store={store}>
        <Header/>
          <div className="min-h-[90vh]">
            {children}
          </div>
          <Footer />
        </Provider>,
        </SessionProvider>
      </body>
    </html>
  );
}
