import Image from "next/image";

import { Container } from "@/components/layout/public/container";

import { ButtonLink, Eyebrow, Indicator, SIGN_UP_URL } from "./section-primitives";

const INDICATORS = [
  { label: "A partir de", value: "R$ 25", hint: "por usuário ao mês" },
  { label: "Instalação", value: "Nenhuma", hint: "Funciona no navegador" },
  { label: "Marca", value: "A sua", hint: "Logo e cores da consultoria" },
];

/**
 * Abertura da página: diz o que é o produto, para quem e qual o próximo passo.
 */
export default function Hero() {
  return (
    <section className="pt-16">
      <div className="border-b border-line-soft bg-[linear-gradient(100deg,var(--surface-base),var(--surface-tint))]">
        <Container className="pt-16 pb-14 md:pt-24 md:pb-16">
          <Eyebrow>Para planejadores, consultores e assessores financeiros</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-[44px] leading-[50px] text-ink-900 text-balance md:text-[64px] md:leading-[72px] xl:text-display-xl">
            O sistema da sua consultoria financeira. Com a sua marca.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-[28px] font-light text-ink-600 text-pretty">
            O DashFinance reúne o diagnóstico, o orçamento, as metas, os investimentos e o patrimônio de cada cliente em
            um só lugar. Você acompanha toda a carteira, e o seu cliente usa um aplicativo com o logo e as cores da sua
            consultoria.
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <ButtonLink href={SIGN_UP_URL} chevron>
              Começar teste grátis
            </ButtonLink>
            <ButtonLink href="#como-funciona" variant="soft">
              Ver como funciona
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-0">
            {INDICATORS.map((item, index) => (
              <div key={item.label} className={index > 0 ? "sm:border-l sm:border-line-strong sm:pl-7" : "sm:pr-7"}>
                <Indicator label={item.label} value={item.value} hint={item.hint} />
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-12 md:py-16">
        <figure className="border border-line-soft bg-surface-base">
          <figcaption className="border-b border-line-soft px-5 py-3 text-overline uppercase text-ink-500">
            Aplicativo do cliente / Visão geral
          </figcaption>
          <Image
            src="/images/app/dashboard.png"
            alt="Visão geral do cliente com saldo consolidado, receitas, despesas, resultado e o fluxo de caixa do mês"
            width={1568}
            height={765}
            quality={90}
            priority
            className="block h-auto w-full"
          />
        </figure>
      </Container>
    </section>
  );
}
