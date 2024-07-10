import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";
import Footer from "@/components/shares/Footer";
import { Toaster } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Surfing",
  description: "Discover images and photographs of the astronomy and the wonders of the universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", spaceGrotesk.className)}>
        {children}

        <Footer />

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
