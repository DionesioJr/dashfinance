import "@/styles/globals.css";
import type { Metadata } from "next";

import CoreProvider from "@/providers/core-provider";

export const metadata: Metadata = {
  title: "DashFinance - Sistema de Planejamento Financeiro",
  description:
    "Gerencie suas finanças pessoais e empresariais com facilidade. Controle entradas, saídas e faça projeções financeiras.",
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
    title: "DashFinance - Sistema de Planejamento Financeiro",
    description:
      "Gerencie suas finanças pessoais e empresariais com facilidade. Controle entradas, saídas e faça projeções financeiras.",
    siteName: "DashFinance",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashFinance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DashFinance - Sistema de Planejamento Financeiro",
    description:
      "Gerencie suas finanças pessoais e empresariais com facilidade. Controle entradas, saídas e faça projeções financeiras.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className="light">
      <body suppressHydrationWarning className="min-h-screen bg-background antialiased">
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  );
}
