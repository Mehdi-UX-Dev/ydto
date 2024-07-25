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
        className={cn("min-h-scree bg-background font-sans ", inter.variable)}
      >
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <div className="absolute h-screen w-full -z-10 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.7)0%,rgba(108,99,255,0.1)50%,rgba(108,99,255,0)100%)]"></div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
