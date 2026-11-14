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
 * Passo a passo do atendimento, com seletor de etapas no padrão do menu lateral.
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

      <div className="mt-12 grid md:grid-cols-[240px_1fr]">
        <div
          role="tablist"
          aria-label="Etapas do atendimento"
          className="flex overflow-x-auto border-b border-line-soft md:flex-col md:overflow-visible md:border-b-0"
        >
          {STEPS.map((item, index) => (
            <button
              key={item.label}
              id={`etapa-${index}`}
              role="tab"
              type="button"
              aria-selected={active === index}
              aria-controls="etapa-painel"
              onClick={() => setActive(index)}
              className={cn(
                "focus-ring -mb-px flex h-11 shrink-0 cursor-pointer items-center gap-4 border-b-2 px-4 text-left text-body-sm transition-colors md:mb-0 md:border-b-0 md:border-l-2 md:px-7",
                active === index
                  ? "border-ink-900 font-medium text-ink-900"
                  : "border-transparent text-ink-600 hover:bg-surface-hover hover:text-ink-900",
              )}
            >
              <span className="text-caption text-ink-500 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div
          id="etapa-painel"
          role="tabpanel"
          aria-labelledby={`etapa-${active}`}
          className="pt-8 md:border-l md:border-line-soft md:pt-0 md:pl-12"
        >
          <p className="text-overline uppercase text-ink-500">
            Etapa {String(active + 1).padStart(2, "0")} de 04
          </p>
          <h3 className="mt-3 text-title text-ink-900">{step.title}</h3>
          <p className="mt-3 max-w-xl text-body text-ink-600">{step.text}</p>
          <ul className="mt-8 max-w-xl border-t border-line-strong">
            {step.items.map((item) => (
              <li key={item} className="flex items-center gap-4 border-b border-line-soft py-4 text-body-sm text-ink-900">
                <span className="size-1.5 shrink-0 rounded-pill bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
