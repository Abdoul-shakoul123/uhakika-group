import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH
  ? "https://abdoul-shakoul123.github.io" + process.env.NEXT_PUBLIC_BASE_PATH
  : undefined;

export const metadata: Metadata = {
  title: "Uhakika Group - High-Speed Internet Services",
  description: "Reliable, fast, and affordable internet solutions for homes and businesses",
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  openGraph: baseUrl ? { url: baseUrl } : undefined,
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

