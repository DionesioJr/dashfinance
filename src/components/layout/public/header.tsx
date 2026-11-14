"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { BrandMark } from "./brand-mark";
import { Container } from "./container";
import { ModeToggle } from "./mode-toggle";

const SIGN_UP_URL = "https://app.dashfinance.com.br/sign-up";
const SIGN_IN_URL = "https://app.dashfinance.com.br/sign-in";

const NAVIGATION = [
  { name: "Como funciona", href: "/#como-funciona" },
  { name: "Recursos", href: "/#recursos" },
  { name: "Para quem", href: "/#para-quem" },
  { name: "Preços", href: "/#precos" },
  { name: "Perguntas", href: "/#perguntas" },
];

/**
 * Cabeçalho fixo do site público com navegação por âncoras.
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-surface-base/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="focus-ring shrink-0 rounded-[7px]" aria-label="DashFinance, página inicial">
          <BrandMark priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="focus-ring py-3 text-body-sm text-ink-600 transition-colors hover:text-ink-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ModeToggle />
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link href={SIGN_IN_URL}>Entrar</Link>
          </Button>
          <Button asChild className="ml-1 hidden md:inline-flex">
            <Link href={SIGN_UP_URL}>Começar teste grátis</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu strokeWidth={1.5} aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] gap-0 p-0">
              <SheetTitle className="flex h-16 items-center px-6 text-overline uppercase text-ink-500">Menu</SheetTitle>
              <nav className="flex flex-col border-t border-line-soft px-6" aria-label="Navegação principal">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="focus-ring flex min-h-11 items-center border-b border-line-soft py-3 text-body-sm text-ink-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 p-6">
                <Button asChild variant="secondary" size="lg">
                  <Link href={SIGN_IN_URL}>Entrar</Link>
                </Button>
                <Button asChild size="lg">
                  <Link href={SIGN_UP_URL}>Começar teste grátis</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
