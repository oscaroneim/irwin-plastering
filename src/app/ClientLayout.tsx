"use client";

import "./globals.css";
import NavBar from "../components/NavBar/page";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer/page";
import { Toaster } from "../components/Ui/toaster";
import { SelectionProvider } from "@/utils/SelectionContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SelectionProvider>
      <header>
        <NavBar />
      </header>
      <main className="flex-grow">
        <Wrapper>
          <Toaster />
          {children}
        </Wrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </SelectionProvider>
  );
}
