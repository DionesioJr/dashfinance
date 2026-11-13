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
 * Galeria com as principais telas do aplicativo do cliente.
 */
export default function Screens() {
  const [active, setActive] = useState(0);

  return (
    <Section id="telas" muted>
      <SectionHeading
        eyebrow="Por dentro do aplicativo"
        title="O que o seu cliente vê, em quatro telas."
        description="Cada cliente acompanha a própria vida financeira, e você enxerga os mesmos números no seu painel."
      />

      <div role="tablist" aria-label="Telas do aplicativo" className="mt-10 flex gap-2 overflow-x-auto pb-1">
        {SCREENS.map((screen, index) => (
          <button
            key={screen.label}
            role="tab"
            type="button"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-[4px] border px-4 py-2 text-sm transition-colors",
              active === index
                ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
                : "border-neutral-200 text-neutral-700 hover:border-neutral-400 dark:border-neutral-800 dark:text-neutral-300",
            )}
          >
            <span className="font-mono text-xs opacity-60">{String(index + 1).padStart(2, "0")}</span>
            {screen.label}
          </button>
        ))}
      </div>

      <figure role="tabpanel" className="mt-6">
        <div className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] dark:border-neutral-800">
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
        <figcaption className="mt-4 text-[15px] text-neutral-600 dark:text-neutral-400">
          {SCREENS[active].caption}
        </figcaption>
      </figure>
    </Section>
  );
}
