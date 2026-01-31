"use client";

import { Menu, ArrowUpRight,  LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState("/logo-system.svg");
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Atualiza o estado do scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Atualiza o logo com base no tema
  useEffect(() => {
    if (theme === "dark") {
      setLogo("/logo-dark.svg");
    } else if (theme === "light") {
      setLogo("/logo-light.svg");
    } else {
      setLogo("/logo-system.svg");
    }
  }, [theme]);

  // Define os itens de navegação com ícones
  const navigationItems: Array<{ name: string; href: string; icon?: React.ReactNode }> = [
    // { name: "Recursos", href: "/#recursos", icon: <Home className="h-4 w-4 mr-2" /> },
    // { name: "Preços", href: "/#precos", icon: <DollarSign className="h-4 w-4 mr-2" /> },
    // { name: "Blog", href: "/blog", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    // { name: "Sobre", href: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
  ];

  return (
    <header
      className={`${
        isScrolled
          ? "fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md dark:bg-black/95 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm "
          : "absolute inset-x-0 top-0 z-50 bg-transparent"
      } transition-all duration-300`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="DashFinance" width={130} height={32} priority className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ModeToggle />

            <div className="hidden md:flex items-center gap-3">
              <Link href="/sign-in">
                <Button variant="ghost" className="font-medium cursor-pointer hover:text-green-600 dark:hover:text-green-500">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="font-medium group cursor-pointer bg-black dark:bg-green-500 text-white dark:text-black hover:bg-black/90 dark:hover:bg-green-600 border border-green-500/20 dark:border-green-400 shadow-sm">
                  Cadastre-se
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[380px] p-0 overflow-y-auto">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image src={logo} alt="DashFinance" width={130} height={32} className="h-8 w-auto" />
                    </Link>
                  </div>

                  <div className="px-4 py-6">
                    <nav className="flex flex-col space-y-1">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center py-3 px-4 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/60 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="space-y-3">
                      <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                        <Button variant="outline" className="w-full justify-center font-medium mb-4">
                          <LogIn className="mr-2 h-4 w-4" />
                          Login
                        </Button>
                      </Link>
                      <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                        <Button className="w-full justify-center font-medium">
                          Cadastre-se
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
