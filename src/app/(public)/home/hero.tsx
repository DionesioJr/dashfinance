"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import DashboardPreview from "./dashboard-preview";

export default function Hero() {


  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-black pt-20 md:pt-32 pb-16 transition-colors duration-300">
      {/* Grade de fundo */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Partículas sutis com verde */}
      <div
        className="absolute inset-0 flex items-center justify-center z-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 8%)",
          backgroundSize: "24px 24px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo de texto - esquerda em desktop, acima em mobile */}
          <div className="text-left max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-950/30 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-800">
                  Plataforma para Consultores Financeiros
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">Gerencie seus clientes</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-700 to-green-600 dark:from-white dark:via-green-400 dark:to-green-500">
                  do onboarding ao relatório
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Sistema profissional desenvolvido especificamente para <strong className="text-gray-900 dark:text-white">planejadores, consultores e assessores financeiros</strong> que desejam escalar seu negócio. Tenha sua própria plataforma com <strong className="text-green-700 dark:text-green-400">marca personalizada</strong>, automatize o atendimento e ofereça serviços premium aos seus clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto whitespace-nowrap text-base font-semibold ring-offset-white transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-black cursor-pointer hover:bg-black/90 dark:hover:bg-green-600 py-2 inline-flex items-center justify-center gap-2 rounded-lg relative h-12 px-8 bg-black dark:bg-green-500 text-white dark:text-black border border-green-500/20 dark:border-green-400 shadow-[0_8px_20px_-4px_rgba(16,185,129,0.3)] dark:shadow-[0_8px_20px_-4px_rgba(16,185,129,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(16,185,129,0.4)] dark:hover:shadow-[0_12px_28px_-4px_rgba(16,185,129,0.6)]">
                  Iniciar teste grátis
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </Link>

            </motion.div>

            
          </div>

          {/* Card de demonstração - direita em desktop, abaixo em mobile */}
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
}
