"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, FileSpreadsheet, Shield, Target, TrendingUp, Users2, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Users2 className="h-6 w-6 text-blue-500" />,
      title: "Carteira de Clientes",
      description:
        "Gerencie múltiplos clientes com dashboards individualizados e acompanhamento personalizado de cada portfólio.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]", // Azul
    },
    {
      icon: <Target className="h-6 w-6 text-purple-500" />,
      title: "Metas e Objetivos",
      description: "Defina e acompanhe metas financeiras específicas para cada cliente com relatórios de progresso detalhados.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]", // Roxo
    },
    {
      icon: <Briefcase className="h-6 w-6 text-pink-500" />,
      title: "Gestão Empresarial",
      description: "Ferramentas específicas para consultores que atendem tanto pessoas físicas quanto jurídicas.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]", // Rosa
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-cyan-500" />,
      title: "Análise de Performance",
      description: "Compare performance entre clientes e identifique oportunidades de otimização de investimentos.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]", // Ciano
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-indigo-500" />,
      title: "Relatórios Executivos",
      description: "Gere relatórios profissionais personalizados com sua marca para apresentação aos clientes.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]", // Índigo
    },
    {
      icon: <Shield className="h-6 w-6 text-violet-500" />,
      title: "Conformidade e Segurança",
      description: "Mantenha dados dos clientes seguros com criptografia avançada e controles de acesso rigorosos.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]", // Violeta
    },
    {
      icon: <Zap className="h-6 w-6 text-fuchsia-500" />,
      title: "Automação Inteligente",
      description: "Automatize tarefas repetitivas e receba alertas sobre oportunidades de mercado para seus clientes.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]", // Fúcsia
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-500" />,
      title: "Credibilidade Profissional",
      description: "Ofereça um serviço premium com ferramentas profissionais que destacam sua expertise no mercado.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]", // Esmeralda
    },
  ];

  // Animação para aparecer os elementos
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="recursos" className="py-16 md:py-24 bg-white dark:bg-black transition-colors duration-300">
      {/* Grade de fundo estilo Huly.io */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #555 1px, transparent 1px), linear-gradient(to bottom, #555 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-500 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800/60 bg-transparent backdrop-blur-sm"
          >
            Recursos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Transforme sua vida financeira
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            O DashFinance é a plataforma completa para <strong>pessoas que desejam organizar suas finanças</strong> e para 
            <strong> consultores financeiros</strong> que precisam gerenciar múltiplos clientes com excelência.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800 
                hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 
                ${feature.glowColor} hover:-translate-y-1`}
            >
              <div
                className={`p-3 bg-gray-100 dark:bg-gray-900 rounded-lg w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-800`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>

              {/* Brilho neon no hover - estilo Huly.io */}
              <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-2 bg-transparent border border-blue-200 dark:border-blue-800 text-blue-500 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            <span>Para pessoas e profissionais que levam finanças a sério</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Organize, Planeje, Prospere
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seja para controlar suas finanças pessoais com inteligência artificial ou oferecer consultoria premium aos seus clientes,
            o DashFinance oferece todas as ferramentas necessárias para o sucesso financeiro.
          </p>
        </motion.div>

        {/* Linha de separação com efeito neon */}
        <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
