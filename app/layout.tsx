import type { Metadata } from "next";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/shared/Header";
import {ThemeProvider} from "next-themes";
import Cards from "@/components/shared/Cards";
import { ConvexClientProvider } from "./ConvexClientProvider";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";

export const metadata: Metadata = {
  title: "Quest: Your Blogging Platform",
  description: "Your travel blog application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body
      >
      <ConvexClientProvider>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Header/>
        <SyncUserWithConvex/>
        {children}
        <Cards/>
      </ThemeProvider>
      </ConvexClientProvider>
      </body>
    </html>
      </ClerkProvider>
  );
}
