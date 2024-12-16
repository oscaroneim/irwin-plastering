"use client";

import "./globals.css";
import NavBar from "../components/NavBar/page";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer/page";
import { Toaster } from "../components/Ui/toaster";
import { Montserrat } from "next/font/google";
import { SelectionProvider } from "@/utils/SelectionContext";

const fontSans = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      id="top"
      className={`${fontSans.className} flex flex-col min-h-screen overflow-x-hidden`}
    >
      <SelectionProvider>
        <NavBar />
        <main className="flex-grow">
          <Wrapper>
            <Toaster />
            {children}
          </Wrapper>
        </main>
        <Footer className="w-full" />
      </SelectionProvider>
    </body>
  );
}
