"use client";
import { motion } from "framer-motion";
import { BarChart3, Calendar, FileText, MessageCircle, Settings, Shield, TrendingUp, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Gestão de Carteira de Clientes",
      description: "Gerencie múltiplos clientes simultaneamente com dashboards individualizados, acompanhamento personalizado e controle centralizado de todas as carteiras.",
      icon: Users,
      color: "text-green-600 dark:text-green-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      title: "Whitelabel Completo",
      description: "Sua marca em evidência. Personalize cores, logotipo e domínio próprio. Ofereça uma experiência premium com sua identidade visual.",
      icon: Settings,
      color: "text-emerald-600 dark:text-emerald-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      title: "Onboarding Automatizado",
      description: "Cadastro e coleta de dados dos clientes de forma inteligente e estruturada. Reduza o tempo de setup e comece a atender mais rápido.",
      icon: TrendingUp,
      color: "text-green-700 dark:text-green-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      title: "Relatórios Estratégicos",
      description: "Gere relatórios executivos personalizados com sua marca para impressionar clientes. Dashboards completos com análises detalhadas.",
      icon: FileText,
      color: "text-emerald-600 dark:text-emerald-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      title: "Planejamento Financeiro",
      description: "Crie planejamentos personalizados para cada cliente. Defina metas, acompanhe progresso e demonstre resultados de forma profissional.",
      icon: BarChart3,
      color: "text-green-600 dark:text-green-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      title: "Assistente IA para Consultores",
      description: "Inteligência artificial que ajuda na análise de carteiras, sugestões de investimentos e insights estratégicos para orientar seus clientes.",
      icon: MessageCircle,
      color: "text-emerald-600 dark:text-emerald-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      title: "Agenda de Atendimentos",
      description: "Organize reuniões com clientes, lembretes de follow-up e vencimentos importantes. Gestão completa da sua rotina profissional.",
      icon: Calendar,
      color: "text-teal-600 dark:text-teal-400",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
    {
      title: "Segurança Empresarial",
      description: "Dados dos seus clientes protegidos com criptografia avançada, backup automático e conformidade com LGPD. Controle total de acesso.",
      icon: Shield,
      color: "text-green-600 dark:text-green-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-black relative transition-colors duration-300">
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
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-green-600 dark:text-green-500 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30"
          >
            Funcionalidades
          </motion.div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
            Ferramentas profissionais para consultores
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Desenvolvido por consultores para consultores. Todas as ferramentas que você precisa para gerenciar múltiplos clientes com excelência e escalar seu negócio de assessoria financeira.
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
                className={`group relative bg-white dark:bg-gray-900 p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800
                  hover:border-green-500 dark:hover:border-green-500 ${feature.glowColor}
                  transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="p-2 bg-green-50 dark:bg-green-950/30 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-900/40">
                  {Icon && <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color} transition-colors duration-300`} />}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/10 group-hover:to-emerald-500/10 dark:group-hover:from-green-500/20 dark:group-hover:to-emerald-500/20 blur-xl transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Linha de separação */}
        <div className="mt-16 md:mt-24 relative h-px w-full bg-gradient-to-r from-transparent via-green-500/30 dark:via-green-400/30 to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
