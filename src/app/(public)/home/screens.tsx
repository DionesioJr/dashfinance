"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/shared/utils/cn";

import { Section, SectionHeading } from "./section-primitives";

const SCREENS = [
  {
    label: "Visão geral",
    src: "/images/app/dashboard.png",
    caption: "Saldo consolidado, receitas, despesas e resultado do mês, com o fluxo de caixa dos últimos meses.",
  },
  {
    label: "Visão anual",
    src: "/images/app/visao-anual.png",
    caption: "Saldo atual, saldo projetado para dezembro e a receita já comprometida, com receitas e despesas mês a mês.",
  },
  {
    label: "Transações",
    src: "/images/app/transacoes.png",
    caption: "Todas as movimentações do período em uma lista, com status, método de pagamento, filtros e busca.",
  },
  {
    label: "Orçamento",
    src: "/images/app/orcamento.png",
    caption: "Limite por categoria, quanto já foi gasto e quanto ainda dá para gastar por dia até o fim do mês.",
  },
  {
    label: "Contas e cartões",
    src: "/images/app/contas-e-cartoes.png",
    caption: "Saldos de todas as contas, com as últimas movimentações e as contas conectadas pelo Open Finance.",
  },
  {
    label: "Patrimônio",
    src: "/images/app/patrimonio.png",
    caption: "Caixa, investimentos, bens e dívidas em uma visão consolidada, com a composição dos ativos.",
  },
  {
    label: "Metas",
    src: "/images/app/metas.png",
    caption: "Metas do cliente com o valor acumulado, o quanto falta e a prioridade de cada uma.",
  },
  {
    label: "Aposentadoria",
    src: "/images/app/aposentadoria.png",
    caption: "Quanto investir por mês para chegar à renda desejada, com a evolução do patrimônio ao longo da vida.",
  },
];

/**
 * Galeria com as principais telas do aplicativo do cliente, trocadas por filtros em cápsula.
 */
export default function Screens() {
  const [active, setActive] = useState(0);

  return (
    <Section id="telas">
      <SectionHeading
        eyebrow="Por dentro do aplicativo"
        title="O que o seu cliente vê, tela a tela."
        description="Cada cliente acompanha a própria vida financeira, e você enxerga os mesmos números no seu painel."
      />

      <div role="tablist" aria-label="Telas do aplicativo" className="mt-10 flex gap-2 overflow-x-auto pb-1">
        {SCREENS.map((screen, index) => (
          <button
            key={screen.label}
            id={`tela-${index}`}
            role="tab"
            type="button"
            aria-selected={active === index}
            aria-controls="tela-painel"
            onClick={() => setActive(index)}
            className={cn(
              "focus-ring flex h-9 shrink-0 cursor-pointer items-center rounded-pill px-4 text-body-sm transition-colors",
              active === index ? "bg-brand-050 text-ink-900" : "text-ink-500 hover:text-ink-900",
            )}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <figure id="tela-painel" role="tabpanel" aria-labelledby={`tela-${active}`} className="mt-6">
        <div className="border border-line-soft bg-surface-base">
          {SCREENS.map((screen, index) => (
            <Image
              key={screen.src}
              src={screen.src}
              alt={`Tela de ${screen.label.toLowerCase()} do aplicativo DashFinance`}
              width={1568}
              height={765}
              quality={90}
              className={cn("h-auto w-full", active === index ? "block" : "hidden")}
            />
          ))}
        </div>
        <figcaption className="mt-4 max-w-2xl text-body text-ink-600">{SCREENS[active].caption}</figcaption>
      </figure>
    </Section>
  );
}
