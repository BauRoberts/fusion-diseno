import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/page-loader";
import FloatingWhatsApp from "@/components/floating-whatsapp";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"], // 300=Light, 400=Regular, 500=Medium, 700=Bold, 800=ExtraBold
  variable: "--font-figtree",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // Including various weights for flexibility
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Fusion Diseño - Transformando espacios con diseño interior exclusivo",
  description: "Transformando espacios con diseño interior exclusivo",
  icons: {
    icon: "/favicon-negro.png", // This references your file in the public directory
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${ibmPlexMono.variable} font-sans`}
      >
        <PageLoader>{children}</PageLoader>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}