import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import "@/app/global.css";
const inter = Inter({ subsets: ["latin"] });
import ShoeWrapper from "../ui/calzados/context/ShoeContext";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <ShoeWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ShoeWrapper>
      </body>
    </html>
  );
}
