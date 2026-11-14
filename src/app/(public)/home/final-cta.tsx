import { Container } from "@/components/layout/public/container";
import { MarbleBackground } from "@/components/layout/public/marble-background";

import { ButtonLink, DEMO_URL, SIGN_UP_URL } from "./section-primitives";

const STEPS = [
  ["Hoje", "Crie a conta e configure o logo e as cores da sua consultoria."],
  ["Semana 1", "Convide os primeiros clientes para o onboarding."],
  ["Mês 1", "Entregue o primeiro diagnóstico financeiro em PDF."],
];

/**
 * Chamada final no painel escuro com mármore, com os primeiros passos depois do cadastro.
 */
export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-surface-inverse text-on-inverse">
      <MarbleBackground id="cta-marmore" />
      <Container className="relative py-20 md:py-28">
        <p className="text-overline uppercase text-on-inverse-muted">Comece agora</p>
        <h2 className="mt-4 max-w-3xl font-display text-display-md text-balance md:text-display-lg">
          Organize a sua carteira de clientes ainda esta semana.
        </h2>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row">
          <ButtonLink href={SIGN_UP_URL} variant="inverse" chevron>
            Começar teste grátis
          </ButtonLink>
          <ButtonLink href={DEMO_URL} variant="inverseGhost">
            Agendar demonstração
          </ButtonLink>
        </div>
        <ol className="mt-16 grid gap-8 border-t border-on-inverse/15 pt-8 sm:grid-cols-3">
          {STEPS.map(([when, what]) => (
            <li key={when}>
              <p className="text-overline uppercase text-on-inverse">{when}</p>
              <p className="mt-2 text-body text-on-inverse-muted">{what}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
