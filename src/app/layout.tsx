import { Montserrat } from "next/font/google";
import NavBar from "../components/NavBar/page";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer/page";
import { Toaster } from "../components/Ui/toaster";
import { SelectionProvider } from "@/utils/SelectionContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fontSans = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Irwin Plastering",
  description:
    "Irwin Plastering. Rendering Specialists who handle Plastering, K Rend, Coloured Renders, Liquid Screed and Rendering. We operate in Oxfordshire and Buckinghamshire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body id="top" className={`${fontSans.className} flex flex-col h-screen`}>
        <SelectionProvider>
          <NavBar />
          <main className="flex-grow w-full mx-auto">
            <Wrapper>
              <Toaster />
              {children}
              <SpeedInsights />
            </Wrapper>
          </main>
          <Footer />
        </SelectionProvider>
      </body>
    </html>
  );
}
