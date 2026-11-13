"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled
          ? "border-neutral-200 bg-white/90 backdrop-blur-md dark:border-neutral-800 dark:bg-[#0b0b0b]/90"
          : "border-transparent bg-white dark:bg-[#0b0b0b]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="DashFinance, página inicial">
          <Image src="/logo-light.svg" alt="DashFinance" width={130} height={32} priority className="h-7 w-auto dark:hidden" />
          <Image src="/logo-dark.svg" alt="DashFinance" width={130} height={32} priority className="hidden h-7 w-auto dark:block" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link
            href={SIGN_IN_URL}
            className="hidden px-3 text-sm text-neutral-700 hover:text-neutral-900 md:inline dark:text-neutral-300 dark:hover:text-white"
          >
            Login
          </Link>
          <Link
            href={SIGN_UP_URL}
            className="hidden h-9 items-center rounded-[4px] bg-neutral-900 px-4 text-sm font-medium text-white hover:bg-neutral-700 md:inline-flex dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Começar teste grátis
          </Link>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <nav className="flex flex-col px-4 pt-16" aria-label="Navegação principal">
                  {NAVIGATION.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="border-b border-neutral-200 py-3.5 text-base text-neutral-800 dark:border-neutral-800 dark:text-neutral-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3 p-4">
                  <Link
                    href={SIGN_IN_URL}
                    className="flex h-11 items-center justify-center rounded-[4px] border border-neutral-300 text-sm font-medium dark:border-neutral-700"
                  >
                    Login
                  </Link>
                  <Link
                    href={SIGN_UP_URL}
                    className="flex h-11 items-center justify-center rounded-[4px] bg-neutral-900 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
                  >
                    Começar teste grátis
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
