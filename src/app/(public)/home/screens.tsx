"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/shared/utils/cn";

import { Section, SectionHeading } from "./section-primitives";

const SCREENS = [
  {
    label: "Dashboard",
    src: "/images/app/dashboard.jpg",
    caption: "Receita, despesas e saldo do mês, com o ritmo de gastos comparado ao período anterior.",
  },
  {
    label: "Balanço anual",
    src: "/images/app/balanco-anual.jpg",
    caption: "Saldo atual, projeção para 12 meses e a variação de cada mês do ano em uma tabela.",
  },
  {
    label: "Orçamento",
    src: "/images/app/orcamento.jpg",
    caption: "Limites por categoria de despesa e receitas previstas, mês a mês.",
  },
  {
    label: "Aposentadoria",
    src: "/images/app/aposentadoria.jpg",
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
        title="O que o seu cliente vê, em quatro telas."
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
              className={cn("h-auto w-full", active === index ? "block" : "hidden")}
            />
          ))}
        </div>
        <figcaption className="mt-4 max-w-2xl text-body text-ink-600">{SCREENS[active].caption}</figcaption>
      </figure>
    </Section>
  );
}
