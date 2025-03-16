import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kewi Labs | High-Performance Layer 2 Blockchain",
  description: "Kewi is a high-performance Layer 2 blockchain designed to enhance scalability and usability for decentralized applications.",
  openGraph: {
    title: "Kewi Labs | High-Performance Layer 2 Blockchain",
    description: "Kewi is a high-performance Layer 2 blockchain designed to enhance scalability and usability for decentralized applications.",
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
    title: "Kewi Labs | High-Performance Layer 2 Blockchain",
    description: "Kewi is a high-performance Layer 2 blockchain designed to enhance scalability and usability for decentralized applications.",
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
