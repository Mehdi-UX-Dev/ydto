import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "YDTDO - Youth Digital Training and Development Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
