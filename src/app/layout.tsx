import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/page";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer/page";
import { Toaster } from "../components/Ui/toaster";
import { Montserrat } from "next/font/google";

const fontSans = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Irwin Plastering",
  description:
    "Irwin Plastering. Rendering Specialists who handle Plastering, K Rend, Coloured Renders, Liquid Screed and Renderins. We operate in Oxfordshire and Buckinghamshire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} flex flex-col min-h-screen`}>
        <NavBar />
        <Wrapper className="flex-grow">
          <Toaster />
          {children}
        </Wrapper>
        <Footer className="w-full" />
      </body>
    </html>
  );
}
