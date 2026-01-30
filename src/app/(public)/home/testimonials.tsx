"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Com o DashFinance consegui escalar minha consultoria de 15 para 80 clientes sem perder qualidade no atendimento. Os relatórios personalizados impressionam todos os meus clientes.",
      author: "Ricardo Mendes",
      role: "Consultor Financeiro CFP",
      initials: "RM",
      color: "bg-blue-500",
    },
    {
      quote:
        "A plataforma me permitiu oferecer um serviço premium com análises que antes eu fazia manualmente. Minha receita aumentou 45% no primeiro ano.",
      author: "Fernanda Costa",
      role: "Planejadora Financeira",
      initials: "FC",
      color: "bg-purple-500",
    },
    {
      quote:
        "O controle multi-clientes e os dashboards individualizados revolucionaram minha forma de trabalhar. Meus clientes ficam impressionados com a transparência dos dados.",
      author: "Carlos Rodrigues",
      role: "Consultor de Investimentos",
      initials: "CR",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black relative transition-colors duration-300">
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
            Depoimentos
          </motion.div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
            O que nossos usuários dizem
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Veja como o DashFinance tem ajudado pessoas a transformar sua gestão financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-black p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)]"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-shrink-0">
                  <div
                    className={`h-12 w-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-medium text-sm relative overflow-hidden`}
                  >
                    {/* Efeito de grade sobreposição */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "4px 4px",
                      }}
                    />
                    {testimonial.initials}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>

              {/* Efeito de brilho ao passar o mouse - estilo Huly.io */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 dark:group-hover:from-blue-500/10 dark:group-hover:via-purple-500/10 dark:group-hover:to-pink-500/10 blur-xl transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Linha de separação com efeito neon */}
        <div className="mt-16 md:mt-24 relative h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
