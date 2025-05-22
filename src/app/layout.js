import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from '@/app/components/Layout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Edushare",
  description: "Discover best classes for the best learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Layout> {children}</Layout>
      </body>
    </html>
  );
}
