import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import TopMenu from "@/components/Header/TopMenu";
import NavBar from "@/components/Header/NavBar";
import SearchBar from "@/components/Header/SearchBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDb Clone",
  description:
    "International movies database for exploring trends and last movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-slate-900 dark:text-slate-200 text-slate-500 bg-white transition-colors duration-300 select-none`}
      >
        <Providers>
          <header>
            <TopMenu />
            <NavBar />
            <SearchBar />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
