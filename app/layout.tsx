import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollbarProvider from "@/components/layout/ScrollbarProvider";

export const metadata: Metadata = {
  title: "The Blockworks | Minecraft Museum",
  description: "Explore the world's first museum dedicated to Minecraft. Discover interactive exhibits, rare artifacts, and the history of the world's most beloved sandbox game.",
  keywords: ["Minecraft", "Museum", "Gaming", "Interactive", "Exhibits", "Blockworks"],
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "The Blockworks | Minecraft Museum",
    description: "Explore the world's first museum dedicated to Minecraft",
    type: "website",
    images: [
      {
        url: "/minecraft/washintgon-dc-minecraft.png",
        width: 1200,
        height: 630,
        alt: "The Blockworks - Minecraft Museum in Washington D.C.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Blockworks | Minecraft Museum",
    description: "Explore the world's first museum dedicated to Minecraft",
    images: ["/minecraft/washintgon-dc-minecraft.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-obsidian">
        <ScrollbarProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ScrollbarProvider>
      </body>
    </html>
  );
}
