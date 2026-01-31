"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, FileSpreadsheet, Shield, Target, TrendingUp, Users2, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Users2 className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Carteira de Clientes",
      description:
        "Gerencie múltiplos clientes com dashboards individualizados e acompanhamento personalizado de cada portfólio.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      icon: <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
      title: "Metas e Objetivos",
      description: "Defina e acompanhe metas financeiras específicas para cada cliente com relatórios de progresso detalhados.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Gestão Empresarial",
      description: "Ferramentas específicas para consultores que atendem tanto pessoas físicas quanto jurídicas.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-teal-600 dark:text-teal-500" />,
      title: "Análise de Performance",
      description: "Compare performance entre clientes e identifique oportunidades de otimização de investimentos.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
      title: "Relatórios Executivos",
      description: "Gere relatórios profissionais personalizados com sua marca para apresentação aos clientes.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-700 dark:text-green-400" />,
      title: "Conformidade e Segurança",
      description: "Mantenha dados dos clientes seguros com criptografia avançada e controles de acesso rigorosos.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      icon: <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
      title: "Automação Inteligente",
      description: "Automatize tarefas repetitivas e receba alertas sobre oportunidades de mercado para seus clientes.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600 dark:text-green-500" />,
      title: "Credibilidade Profissional",
      description: "Ofereça um serviço premium com ferramentas profissionais que destacam sua expertise no mercado.",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
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
    <section id="recursos" className="py-16 md:py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Grade de fundo */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-green-600 dark:text-green-500 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30"
          >
            Recursos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Transforme sua consultoria financeira
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            DashFinance é a plataforma completa para <strong>planejadores, consultores e assessores financeiros</strong> que desejam
            profissionalizar seu atendimento, escalar o negócio e gerenciar múltiplos clientes com excelência.
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
              className={`group bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800
                hover:border-green-500 dark:hover:border-green-500 transition-all duration-300
                ${feature.glowColor} hover:-translate-y-1`}
            >
              <div
                className={`p-3 bg-green-50 dark:bg-green-950/30 rounded-lg w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-900/40`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>

              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/10 group-hover:to-emerald-500/10 dark:group-hover:from-green-500/20 dark:group-hover:to-emerald-500/20 blur-xl transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
            <span>Para consultores que querem escalar seus negócios</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Atenda mais, cresça mais, lucre mais
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Com DashFinance você oferece consultoria premium com ferramentas profissionais, automatiza processos operacionais e
            foca no que realmente importa: fazer seu negócio crescer e seus clientes prosperarem.
          </p>
        </motion.div>

        {/* Linha de separação */}
        <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 dark:via-green-400/30 to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
