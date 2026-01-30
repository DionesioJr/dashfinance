"use client";
import { motion } from "framer-motion";
import { BarChart3, Calendar, FileText, MessageCircle, Settings, Shield, TrendingUp, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Organização Financeira Pessoal",
      description: "Controle completo das suas finanças com dashboards intuitivos, metas personalizadas e acompanhamento em tempo real.",
      icon: BarChart3,
      color: "text-blue-500 dark:text-blue-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]", // Azul
    },
    {
      title: "Gestão Multi-Clientes",
      description: "Para consultores: atenda vários clientes simultaneamente com dashboards individualizados e controle centralizado.",
      icon: Users,
      color: "text-purple-500 dark:text-purple-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]", // Roxo
    },
    {
      title: "Assistente IA Financeiro",
      description: "Chat inteligente que analisa seus gastos, oferece insights personalizados e ajuda nas decisões financeiras.",
      icon: MessageCircle,
      color: "text-pink-500 dark:text-pink-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]", // Rosa
    },
    {
      title: "Planejamento e Metas",
      description: "Defina objetivos financeiros, acompanhe o progresso e receba orientações para alcançar suas metas mais rapidamente.",
      icon: TrendingUp,
      color: "text-cyan-500 dark:text-cyan-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]", // Ciano
    },
    {
      title: "Relatórios Profissionais",
      description: "Gere relatórios detalhados para acompanhar sua evolução ou apresentar aos clientes com marca própria.",
      icon: FileText,
      color: "text-indigo-500 dark:text-indigo-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]", // Índigo
    },
    {
      title: "Agenda Financeira",
      description: "Nunca mais perca vencimentos com calendário integrado, lembretes automáticos e gestão de compromissos.",
      icon: Calendar,
      color: "text-violet-500 dark:text-violet-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]", // Violeta
    },
    {
      title: "Segurança Avançada",
      description: "Seus dados protegidos com criptografia, backup automático e controle de acesso multicamadas.",
      icon: Shield,
      color: "text-fuchsia-500 dark:text-fuchsia-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]", // Fúcsia
    },
    {
      title: "Interface Personalizada",
      description: "Adapte a plataforma ao seu estilo com temas, layouts flexíveis e configurações que se ajustam ao seu perfil.",
      icon: Settings,
      color: "text-emerald-500 dark:text-emerald-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]", // Esmeralda
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-black relative transition-colors duration-300">
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
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-500 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800/60 bg-transparent backdrop-blur-sm"
          >
            Funcionalidades
          </motion.div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
            Ferramentas inteligentes para todos
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Seja para organizar suas finanças pessoais ou gerenciar múltiplos clientes como consultor, temos as ferramentas certas para potencializar seus resultados financeiros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature, index) => {
            // Garantir que o ícone seja um componente válido
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-white dark:bg-black p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 
                  hover:border-gray-300 dark:hover:border-gray-700 ${feature.glowColor} 
                  transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
                  {Icon && <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color} transition-colors duration-300`} />}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Efeito de brilho ao passar o mouse - estilo Huly.io */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 dark:group-hover:from-blue-500/20 dark:group-hover:via-purple-500/20 dark:group-hover:to-pink-500/20 blur-xl transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Linha de separação com efeito neon */}
        <div className="mt-16 md:mt-24 relative h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
