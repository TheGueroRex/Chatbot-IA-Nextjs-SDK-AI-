import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheGüeroIA | Chatbot",
  description:
    "Esto es un chatbot de IA potenciado por el modelo de GPT-3.5-Turbo, Desarrollado con el SDK de IA de Next.js",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
