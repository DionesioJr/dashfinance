"use client";

import { motion } from "framer-motion";
import { Clock, FileText, TrendingUp, Users } from "lucide-react";

export default function ConsultantBenefits() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Escale seu negócio",
      description: "Atenda mais clientes sem comprometer a qualidade do serviço",
      stats: "Até 5x mais clientes",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Aumente sua receita",
      description: "Ofereça serviços premium com valor agregado diferenciado",
      stats: "30-50% mais receita",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "Relatórios profissionais",
      description: "Impressione clientes com relatórios detalhados e personalizados",
      stats: "100% customizável",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Economize tempo",
      description: "Automatize tarefas repetitivas e foque no que realmente importa",
      stats: "70% menos tempo",
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];



  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-500 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800/60 bg-transparent backdrop-blur-sm"
          >
            Para Consultores
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Por que consultores escolhem o DashFinance?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Mais de 1.000 consultores já confiam na nossa plataforma para oferecer um serviço de excelência aos seus
            clientes.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              ></div>

              <div className="relative z-10">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{benefit.description}</p>
                <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                  {benefit.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Pronto para revolucionar sua consultoria?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se aos consultores que já estão oferecendo um serviço diferenciado e aumentando sua receita com o
            DashFinance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
