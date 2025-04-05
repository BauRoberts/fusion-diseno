import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"], // Updated weight to include only 400
  variable: "--font-instrument"
});

export const metadata: Metadata = {
  title: "Unroot Design - Standout websites that boost your brand's credibility",
  description: "Unlimited design and Webflow support at a flat monthly rate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${instrumentSerif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
