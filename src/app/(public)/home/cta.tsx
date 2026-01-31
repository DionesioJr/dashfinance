"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Grade de fundo */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Efeito de gradiente verde na borda superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>

      {/* Efeitos decorativos - círculos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-green-500/10 dark:bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl"></div>
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
            Pronto para escalar
            <br className="hidden md:inline" /> sua consultoria?
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Junte-se aos consultores e assessores financeiros que já estão oferecendo serviços premium, atendendo mais clientes
            e aumentando sua receita com o DashFinance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8">
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full whitespace-nowrap text-base font-semibold ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-black cursor-pointer hover:bg-black/90 dark:hover:bg-green-600 py-2 inline-flex items-center justify-center gap-2 rounded-lg relative h-12 px-8 bg-black dark:bg-green-500 text-white dark:text-black border border-green-500/20 dark:border-green-400 shadow-[0_8px_20px_-4px_rgba(16,185,129,0.3)] dark:shadow-[0_8px_20px_-4px_rgba(16,185,129,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(16,185,129,0.4)] dark:hover:shadow-[0_12px_28px_-4px_rgba(16,185,129,0.6)]"
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
                className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-green-500 dark:hover:border-green-500 group transition-all duration-300"
              >
                <span className="relative z-10">Já tenho uma conta</span>
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Efeito de destaque no rodapé */}
        <div className="mt-16 md:mt-20 lg:mt-24 relative">
          <div className="h-[1px] w-full mx-auto bg-gradient-to-r from-transparent via-green-500/30 dark:via-green-400/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
