import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentKub - Borrow, Rent, Share From Your Neighbors",
  description:
    "RentKub is a community-driven peer-to-peer platform that enables neighbors to borrow, lend, and rent items from each other. Save money, reduce waste, and build community connections.",
  keywords: [
    "rental",
    "sharing",
    "peer-to-peer",
    "borrow",
    "lend",
    "community",
    "sustainable",
    "neighbors",
  ],
  openGraph: {
    title: "RentKub - Borrow, Rent, Share From Your Neighbors",
    description:
      "Access items without buying. Join the community-driven sharing platform.",
    type: "website",
    locale: "en_US",
    siteName: "RentKub",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentKub - Borrow, Rent, Share From Your Neighbors",
    description:
      "Access items without buying. Join the community-driven sharing platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
