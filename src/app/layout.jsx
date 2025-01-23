import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Head from "next/head";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Thales - Portfolio",
  description: "Explore my portfolio, showcasing my projects and skills.",
  keywords: ["Portfolio", "Thales", "Frontend Developer", "Projects"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Thales - Portfolio",
    description: "Check out my portfolio and discover my amazing projects!",
    url: "https://thales-portfolio.vercel.app/",
    siteName: "Thales Portfolio",
    images: [
      {
        url: "https://thales-portfolio.vercel.app/assets/home.jpg",
        width: 1200,
        height: 630,
        alt: "Thales Portfolio Cover",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${jetbrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
