import { ArrowLeft, LifeBuoy } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Página não encontrada | DashFinance",
  description: "A página que você está procurando não existe ou foi removida.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 dark:sm:border-gray-800 sm:pl-6">
              <div className="text-center sm:text-left">
                <h1 className="text-7xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 tracking-tight">
                  404
                </h1>
                <div className="mt-4">
                  <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">
                    Página não encontrada
                  </h2>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    Desculpe, não conseguimos encontrar a página que você está procurando.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <Link href="/">
                    <Button variant="default" className="w-full sm:w-auto">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Voltar para o início
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      Contatar suporte
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
