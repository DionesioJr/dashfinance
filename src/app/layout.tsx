import "@/styles/globals.css";
import type { Metadata } from "next";
import { Gilda_Display, Inter_Tight } from "next/font/google";

import CoreProvider from "@/providers/core-provider";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gilda-display",
  display: "swap",
});

const TITLE = "DashFinance: o sistema da sua consultoria financeira";
const DESCRIPTION =
  "Plataforma para planejadores, consultores e assessores financeiros. Onboarding, diagnóstico em PDF, orçamento, metas e patrimônio de cada cliente, em um aplicativo com a sua marca.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.png",
        href: "/images/favicon-dark.png",
      },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://dashfinance.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dashfinance.com.br",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "DashFinance",
    images: [
      {
        url: "/images/dashboard-light.png",
        width: 1920,
        height: 1080,
        alt: "Dashboard do DashFinance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/dashboard-light.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${interTight.variable} ${gildaDisplay.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-background font-sans antialiased">
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  );
}
