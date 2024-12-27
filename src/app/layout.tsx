import ClientLayout from "./ClientLayout";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Irwin Plastering",
  description:
    "Irwin Plastering. Rendering Specialists who handle Plastering, K Rend, Coloured Renders, Liquid Screed and Renderins. We operate in Oxfordshire and Buckinghamshire",
};

const fontSans = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden h-full">
      <body id="top" className={`${fontSans.className} flex flex-col h-screen`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
