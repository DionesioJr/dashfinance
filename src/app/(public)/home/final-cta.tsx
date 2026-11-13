import { ArrowRight } from "lucide-react";

import { ButtonLink, DEMO_URL, SIGN_UP_URL } from "./section-primitives";

const STEPS = [
  ["Hoje", "Crie a conta e configure o logo e as cores da sua consultoria."],
  ["Semana 1", "Convide os primeiros clientes para o onboarding."],
  ["Mês 1", "Entregue o primeiro diagnóstico financeiro em PDF."],
];

/**
 * Chamada final com os primeiros passos depois do cadastro.
 */
export default function FinalCta() {
  return (
    <section className="bg-neutral-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">Comece agora</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-[1.1] tracking-tight text-balance md:text-5xl">
          Organize a sua carteira de clientes ainda esta semana.
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={SIGN_UP_URL} className="bg-white text-neutral-900 hover:bg-neutral-200 dark:bg-white">
            Começar teste grátis
            <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink
            href={DEMO_URL}
            variant="outline"
            className="border-neutral-700 bg-transparent text-white hover:border-neutral-400 dark:border-neutral-700"
          >
            Agendar demonstração
          </ButtonLink>
        </div>
        <ol className="mt-16 grid gap-8 border-t border-neutral-800 pt-8 sm:grid-cols-3">
          {STEPS.map(([when, what]) => (
            <li key={when}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-400">{when}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-300">{what}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
