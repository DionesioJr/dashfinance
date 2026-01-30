"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Grade de fundo estilo Huly.io */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #555 1px, transparent 1px), linear-gradient(to bottom, #555 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Efeito de gradiente colorido na borda superior - estilo Huly.io */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Efeitos decorativos - círculos neon */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight">
            Pronto para transformar
            <br className="hidden md:inline" /> suas finanças?
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Junte-se às pessoas que já organizaram suas finanças e aos consultores que estão oferecendo um serviço
            diferenciado com o DashFinance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 cursor-pointer hover:bg-zinc-900/90 dark:hover:bg-zinc-50/90 py-2 inline-flex items-center justify-center gap-4 rounded-lg font-medium relative h-12 px-6 min-w-72 md:min-w-56 bg-black dark:bg-white text-white dark:text-black border-2 border-orange-500/20 dark:border-orange-400/20 shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)] dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)] backdrop-blur-xs"
              >
                <span className="relative z-10">
                  Cadastre-se
                  <ArrowUpRight className="ml-1 h-4 w-4 inline transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Button>
            </Link>

            <Link href="/sign-in" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 group transition-all duration-300"
              >
                <span className="relative z-10">Já tenho uma conta</span>
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Efeito de destaque no rodapé */}
        <div className="mt-16 md:mt-20 lg:mt-24 relative">
          <div className="h-[1px] w-full mx-auto bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
