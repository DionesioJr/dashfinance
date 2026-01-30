"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useReward } from "react-rewards";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um email válido"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [enviado, setEnviado] = useState(false);
  const { reward } = useReward("rewardId", "confetti");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
    },
  });

  const onSubmit = () => {
    setEnviado(true);

    // Lançar confetti quando formulário for enviado com sucesso
    reward();
  };

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
    <section id="contato" className="relative py-16 md:py-24 bg-white dark:bg-black transition-colors duration-300">
      {/* Grade de fundo estilo Huly.io */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #555 1px, transparent 1px), linear-gradient(to bottom, #555 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Efeitos decorativos - círculos neon */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-500 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800/60 bg-transparent backdrop-blur-sm"
          >
            Contate-nos
          </motion.div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
            Alguma dúvida? Estamos aqui para ajudar
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Nossa equipe está pronta para responder suas dúvidas e ajudar você a começar sua jornada financeira.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white transition-colors duration-300 relative overflow-hidden">
              {/* Efeito de grade sobreposição */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <motion.div variants={item}>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Informações de contato</h3>
              </motion.div>
              <motion.div variants={item}>
                <p className="mb-6 md:mb-8 text-sm md:text-base text-white/90">
                  Estamos disponíveis para atendê-lo de segunda a sexta, das 9h às 18h. Você pode nos contatar pelos
                  canais abaixo ou pelo formulário ao lado.
                </p>
              </motion.div>
              <motion.div variants={item} className="space-y-4">
                <div className="flex items-center">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="text-xs sm:text-sm opacity-75">Email</p>
                    <p className="text-sm sm:text-base font-medium">contato@dashfinance.com.br</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="text-xs sm:text-sm opacity-75">Telefone</p>
                    <p className="text-sm sm:text-base font-medium">+55 81 9880-2087</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="text-xs sm:text-sm opacity-75">Endereço</p>
                    <p className="text-sm sm:text-base font-medium">Recife, PE</p>
                  </div>
                </div>
              </motion.div>

              {/* Decoração no estilo Huly.io - partículas brilhantes */}
              <div
                className="hidden md:block absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-75"
                style={{ animationDuration: "3s", animationDelay: "0s" }}
              ></div>
              <div
                className="hidden md:block absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-ping opacity-75"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              ></div>
              <div
                className="hidden md:block absolute bottom-10 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-75"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
              ></div>

              {/* Círculos decorativos */}
              <div className="hidden md:block absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/5"></div>
              <div className="hidden md:block absolute top-10 left-20 w-16 h-16 rounded-full bg-white/5"></div>
            </div>

            <div className="p-6 sm:p-8 md:p-12">
              {!enviado ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                    <motion.div variants={item}>
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                              Nome
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Seu nome completo"
                                {...field}
                                className="border-gray-200 focus:border-blue-500 dark:border-gray-800 dark:focus:border-blue-500 dark:bg-gray-900/50 transition-colors duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="email@exemplo.com"
                                {...field}
                                className="border-gray-200 focus:border-blue-500 dark:border-gray-800 dark:focus:border-blue-500 dark:bg-gray-900/50 transition-colors duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <FormField
                        control={form.control}
                        name="mensagem"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                              Mensagem
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Como podemos ajudar você?"
                                className="min-h-28 md:min-h-32 resize-none border-gray-200 focus:border-blue-500 dark:border-gray-800 dark:focus:border-blue-500 dark:bg-gray-900/50 transition-colors duration-300"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Button
                        type="submit"
                        className="w-full group whitespace-nowrap text-sm ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 cursor-pointer hover:bg-zinc-900/90 dark:hover:bg-zinc-50/90 py-2 inline-flex items-center justify-center gap-4 rounded-lg font-medium relative h-12 px-6 min-w-72 md:min-w-56 bg-black dark:bg-white text-white dark:text-black border-2 border-orange-500/20 dark:border-orange-400/20 shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)] dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)] backdrop-blur-xs"
                      >
                        <span className="relative z-10">
                          <Send className="mr-2 h-4 w-4 inline" /> Enviar mensagem
                        </span>
                      </Button>
                      <div id="rewardId" className="mt-2 h-1"></div>
                    </motion.div>
                  </form>
                </Form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-4"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
                    <CheckCircle2
                      size={32}
                      className="text-blue-600 dark:text-blue-400 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Mensagem enviada!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base transition-colors duration-300">
                    Muito obrigado pelo seu contato. Nossa equipe retornará em breve.
                  </p>
                  <Button
                    onClick={() => {
                      setEnviado(false);
                      form.reset();
                    }}
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors duration-300"
                  >
                    Enviar nova mensagem
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Linha de separação com efeito neon */}
        <div className="mt-16 md:mt-24 relative h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
