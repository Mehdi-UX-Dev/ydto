import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "YDTDO - Youth Digital Training and Development Organization",
  description: "Nurturing Youth For Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(" bg-background font-sans ", montserrat.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
