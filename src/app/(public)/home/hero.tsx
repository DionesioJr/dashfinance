import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink, Eyebrow, SIGN_UP_URL } from "./section-primitives";

/**
 * Abertura da página: diz o que é o produto, para quem e qual o próximo passo.
 */
export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 dark:bg-[#0b0b0b]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Para planejadores, consultores e assessores financeiros</Eyebrow>
          <h1 className="mt-5 text-[34px] font-semibold uppercase leading-[1.05] tracking-tight text-neutral-900 text-balance sm:text-5xl md:text-[56px] dark:text-white">
            O sistema da sua consultoria financeira. Com a sua marca.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 text-pretty dark:text-neutral-400">
            O DashFinance reúne o diagnóstico, o orçamento, as metas, os investimentos e o patrimônio de cada cliente em
            um só lugar. Você acompanha toda a carteira, e o seu cliente usa um aplicativo com o logo e as cores da sua
            consultoria.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={SIGN_UP_URL}>
              Começar teste grátis
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="#como-funciona" variant="outline">
              Ver como funciona
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-neutral-500 dark:text-neutral-400">
            A partir de R$ 25 por usuário ao mês. Funciona no navegador, sem instalação.
          </p>
        </div>

        <figure className="mt-14 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2.5 dark:border-neutral-800">
            <div className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            </div>
            <figcaption className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
              Aplicativo do cliente / Dashboard
            </figcaption>
            <span className="w-10" aria-hidden />
          </div>
          <Image
            src="/images/app/dashboard.jpg"
            alt="Dashboard do cliente com receita, despesas, saldo líquido e o ritmo de gastos do mês"
            width={1568}
            height={765}
            priority
            className="block h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
