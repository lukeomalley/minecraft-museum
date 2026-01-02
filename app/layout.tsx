import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Blockworks | Minecraft Museum",
  description: "Explore the world's first museum dedicated to Minecraft. Discover interactive exhibits, rare artifacts, and the history of the world's most beloved sandbox game.",
  keywords: ["Minecraft", "Museum", "Gaming", "Interactive", "Exhibits", "Blockworks"],
  icons: {
    icon: "/minecraft/minecraft-grass.png",
    shortcut: "/minecraft/minecraft-grass.png",
    apple: "/minecraft/minecraft-grass.png",
  },
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
