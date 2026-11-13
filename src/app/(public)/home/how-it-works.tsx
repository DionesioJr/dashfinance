"use client";

import { useState } from "react";

import { cn } from "@/shared/utils/cn";

import { Section, SectionHeading } from "./section-primitives";

const STEPS = [
  {
    label: "Convite",
    title: "Você convida o cliente",
    text: "Envie um link de convite. O cliente cria a conta no aplicativo da sua consultoria e já entra vinculado à sua carteira.",
    items: ["Link de convite individual", "Conta do cliente ligada à sua empresa", "Logo e cores da sua marca desde o primeiro acesso"],
  },
  {
    label: "Onboarding",
    title: "O cliente conta a história dele",
    text: "Um cadastro guiado reúne as informações que você levaria duas reuniões para coletar.",
    items: [
      "Dados pessoais, profissionais e da família",
      "Renda, despesas, bens e dívidas",
      "Seguros, proteção e plano de aposentadoria",
    ],
  },
  {
    label: "Diagnóstico",
    title: "Você entrega o diagnóstico",
    text: "Monte o diagnóstico financeiro com plano de ação, sonhos e metas, e gere um relatório em PDF pronto para enviar.",
    items: ["Relatório em PDF com sumário e espaço para assinatura", "Plano de ação, sonhos e metas", "Cada revisão salva como uma nova versão"],
  },
  {
    label: "Acompanhamento",
    title: "Vocês acompanham juntos",
    text: "O cliente lança gastos e acompanha orçamento e metas no dia a dia. Você vê a evolução de cada um no seu painel.",
    items: ["Contas bancárias conectadas por Open Finance", "Orçamento, metas e reserva de emergência", "Painel de clientes e CRM da consultoria"],
  },
];

/**
 * Passo a passo do atendimento, com seletor de etapas.
 */
export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <Section id="como-funciona">
      <SectionHeading
        eyebrow="Como funciona"
        title="Do primeiro contato ao acompanhamento, em quatro etapas."
        description="O mesmo processo para todos os clientes, do convite ao relatório, sem planilha no meio."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-[280px_1fr]">
        <div role="tablist" aria-label="Etapas do atendimento" className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
          {STEPS.map((item, index) => (
            <button
              key={item.label}
              role="tab"
              type="button"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-[4px] border px-4 py-3 text-left text-sm transition-colors",
                active === index
                  ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
                  : "border-neutral-200 text-neutral-700 hover:border-neutral-400 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600",
              )}
            >
              <span className="font-mono text-xs opacity-60">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className="rounded-md border border-neutral-200 bg-[#f7f7f5] p-6 md:p-10 dark:border-neutral-800 dark:bg-neutral-950"
        >
          <p className="font-mono text-xs text-neutral-500">Etapa {String(active + 1).padStart(2, "0")} de 04</p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl dark:text-white">
            {step.title}
          </h3>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">{step.text}</p>
          <ul className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
            {step.items.map((item) => (
              <li key={item} className="flex items-center gap-3 py-3 text-[15px] text-neutral-800 dark:text-neutral-200">
                <span className="size-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
