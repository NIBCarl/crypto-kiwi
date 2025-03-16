import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kewi Labs | Bridging Web2 & Web3",
  description: "Kewi Labs is a USA based blockchain development company focusing on bridging the gap between web2 & web3 with its research, development and contributions to open source software across BTC & ETH networks.",
  openGraph: {
    title: "Kewi Labs | Bridging Web2 & Web3",
    description: "Kewi Labs is a USA based blockchain development company focusing on bridging the gap between web2 & web3 with its research, development and contributions to open source software across BTC & ETH networks.",
    url: "https://kiwi-cryptos.netlify.app/",
    siteName: "Kewi Labs",
    images: [
      {
        url: "/images/og-image.png",
        width: 385,
        height: 385,
        alt: "Kewi Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kewi Labs | Bridging Web2 & Web3",
    description: "Kewi Labs is a USA based blockchain development company focusing on bridging the gap between web2 & web3 with its research, development and contributions to open source software across BTC & ETH networks.",
    images: ["/images/og-image.png"],
    creator: "@Kewi_L2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
