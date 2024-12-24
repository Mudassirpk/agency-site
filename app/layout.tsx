import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Playfair } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import MobileHeader from "./components/mobile-header";

const playFair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppings = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['300', '500', '700']
})

export const metadata: Metadata = {
  title: "Markweb",
  description: "Webapps made easy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playFair.variable} ${poppings.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
