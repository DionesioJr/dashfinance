"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart2,
  ChevronRight,
  CreditCard,
  LineChart,
  PieChart,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState("/images/dashboard-dark.png");

  useEffect(() => {
    setImageSrc(theme === "dark" ? "/images/dashboard-dark.png" : "/images/dashboard-light.png");
  }, [theme]);

  const features = [
    {
      icon: <BarChart2 className="h-4 w-4 text-blue-500 dark:text-blue-400" />,
      text: "Controle Financeiro Inteligente",
      glowColor: "group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    },
    {
      icon: <PieChart className="h-4 w-4 text-purple-500 dark:text-purple-400" />,
      text: "Gestão Multi-Clientes",
      glowColor: "group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]",
    },
    {
      icon: <CreditCard className="h-4 w-4 text-pink-500 dark:text-pink-400" />,
      text: "Planejamento Personalizado",
      glowColor: "group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]",
    },
    {
      icon: <Wallet className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />,
      text: "Organização Financeira",
      glowColor: "group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]",
    },
    {
      icon: <TrendingUp className="h-4 w-4 text-violet-500 dark:text-violet-400" />,
      text: "Metas e Investimentos",
      glowColor: "group-hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]",
    },
    {
      icon: <LineChart className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />,
      text: "Assistente IA Financeiro",
      glowColor: "group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black pt-20 md:pt-32 pb-16 transition-colors duration-300">
      {/* Grade de fundo estilo Huly.io */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #555 1px, transparent 1px), linear-gradient(to bottom, #555 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Partículas sutis */}
      <div
        className="absolute inset-0 flex items-center justify-center z-0 opacity-30 dark:opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 8%)",
          backgroundSize: "24px 24px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-2xl font-semibold tracking-tight text-orange-500 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">Plataforma Completa de</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r  from-orange-500 via-pink-500 to-purple-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  Gestão Financeira
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Para <strong>pessoas</strong> que desejam organizar suas finanças pessoais e para{" "}
              <strong>consultores financeiros</strong> que precisam gerenciar múltiplos clientes. Uma plataforma
              inteligente com planejamento personalizado, dashboards intuitivos e assistente IA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 cursor-pointer hover:bg-zinc-900/90 dark:hover:bg-zinc-50/90 py-2 inline-flex items-center justify-center gap-4 rounded-lg font-medium relative h-12 px-6 min-w-72 md:min-w-56 bg-black dark:bg-white text-white dark:text-black border-2 border-orange-500/20 dark:border-orange-400/20 shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)] dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)] backdrop-blur-xs">
                  Cadastre-se <ArrowUpRight />
                </Button>
              </Link>

              <Link href="/#recursos" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto group h-12 px-6 min-w-72 md:min-w-56 border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-300"
                >
                  Conheça os recursos
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 md:mt-6 flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-2"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 
                    bg-gray-100 dark:bg-gray-900 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 
                    rounded-full border border-gray-200 dark:border-gray-800 
                    hover:border-gray-300 dark:hover:border-gray-700 ${feature.glowColor}
                    transition-all duration-300`}
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 md:mt-12 relative mx-auto max-w-5xl"
        >
          {/* Simulação de navegador simplificada */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-orange-500/30 dark:border-purple-500/30">
            {/* Barra de título do navegador */}
            <div className="flex items-center justify-between h-8 px-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              {/* Botões do navegador */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Título central */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 dark:text-gray-400">
                DashFinance
              </div>
            </div>

            {/* Conteúdo do navegador */}
            <div className="bg-white dark:bg-gray-900 overflow-hidden">
              <Image
                src={imageSrc}
                alt="Dashboard do DashFinance"
                width={1920}
                height={1080}
                priority
                className="w-full"
              />
            </div>
          </div>

          {/* Decoração - reflexo suave */}
          <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 opacity-50 blur-md" />
        </motion.div>
      </div>
    </div>
  );
}
