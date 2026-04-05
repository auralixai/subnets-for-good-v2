import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subnets for Good",
  description: "We bridge the decentralized AI revolution and the social impact world, connecting mission-driven organizations to the tools, networks, and capital reshaping what's possible.",
  metadataBase: new URL("https://subnetsforgood.com"),
  openGraph: {
    title: "Subnets for Good",
    description: "We bridge the decentralized AI revolution and the social impact world.",
    url: "https://subnetsforgood.com",
    siteName: "Subnets for Good",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnets for Good",
    description: "We bridge the decentralized AI revolution and the social impact world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
