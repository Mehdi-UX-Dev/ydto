import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
import { cn } from "@/lib/utils";
import Head from "next/head";
import ClientLayout from "./clientLayout";

interface Metadata {
  title: string;
  description: string;
}

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={cn(" bg-background font-sans ", montserrat.variable)}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
