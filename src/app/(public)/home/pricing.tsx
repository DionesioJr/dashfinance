import { Check } from "lucide-react";

import { ButtonLink, DEMO_URL, SIGN_UP_URL, Section, SectionHeading } from "./section-primitives";

const TIERS = [
  { users: "1+", perUser: 80, monthly: 80 },
  { users: "10+", perUser: 60, monthly: 600 },
  { users: "25+", perUser: 50, monthly: 1250 },
  { users: "50+", perUser: 35, monthly: 1750 },
  { users: "75+", perUser: 30, monthly: 2250 },
];

const IDEAL = { users: "100+", perUser: 25, monthly: 2500 };

const INCLUDED = [
  "Painel central do escritório com gestão de múltiplos clientes",
  "Gestão da equipe de profissionais, com permissões",
  "Personalização visual (white-label): logo, cores e domínio",
  "Dashboard, calendário financeiro e timeline de pagamentos",
  "Importação de extratos OFX com categorização por IA",
  "Metas, objetivos, aposentadoria, assistente de IA e cofre de arquivos",
];

const IDEAL_EXTRAS = ["Suporte prioritário", "Reunião de onboarding", "Treinamento da equipe", "Materiais de apoio"];

const brl = (value: number) => value.toLocaleString("pt-BR");

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 text-body-sm text-ink-900">
      <Check className="mt-px size-[18px] shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
      {children}
    </li>
  );
}

/**
 * Seção de preços por usuário, com o plano ideal em destaque e as faixas de volume em tabela.
 */
export default function Pricing() {
  return (
    <Section id="precos">
      <SectionHeading
        eyebrow="Investimento"
        title="Quanto mais usuários, menor o valor por usuário."
        description="Todos os valores são mensais. Contrato com duração anual e renovação automática. Todos os planos incluem a plataforma completa."
      />

      <div className="mt-12 grid gap-12 border-t border-line-soft pt-10 lg:grid-cols-[3fr_2fr] lg:gap-0">
        <div className="lg:pr-12">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-overline uppercase text-ink-500">Plano Ideal · {IDEAL.users} usuários</p>
            <span className="inline-flex h-7 items-center rounded-pill bg-brand-050 px-3 text-[13px] text-ink-900">
              Melhor valor
            </span>
          </div>
          <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-amount-lg text-ink-900 tabular-nums">R$ {IDEAL.perUser}</span>
            <span className="text-body-sm text-ink-600">por usuário ao mês</span>
          </p>
          <p className="mt-3 text-body text-ink-600">
            A partir de R$ {brl(IDEAL.monthly)} ao mês para {IDEAL.users} usuários.
          </p>

          <ul className="mt-8 space-y-3 border-t border-line-soft pt-8">
            {INCLUDED.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <p className="mt-8 text-overline uppercase text-ink-500">Exclusivo para {IDEAL.users} usuários</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {IDEAL_EXTRAS.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <ButtonLink href={DEMO_URL} chevron className="mt-10 w-full sm:w-auto">
            Solicitar proposta
          </ButtonLink>
        </div>

        <div className="flex flex-col lg:border-l lg:border-line-soft lg:pl-12">
          <p className="text-overline uppercase text-ink-500">Outras opções</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-body-sm">
              <thead>
                <tr className="border-b border-line-strong">
                  <th scope="col" className="py-3 text-overline uppercase text-ink-500">
                    Usuários
                  </th>
                  <th scope="col" className="py-3 text-right text-overline uppercase text-ink-500">
                    Por usuário
                  </th>
                  <th scope="col" className="py-3 text-right text-overline uppercase text-ink-500">
                    Parcela/mês
                  </th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {TIERS.map((tier) => (
                  <tr key={tier.users} className="border-b border-line-soft text-ink-900">
                    <td className="py-3">{tier.users}</td>
                    <td className="py-3 text-right">R$ {brl(tier.perUser)}</td>
                    <td className="py-3 text-right">R$ {brl(tier.monthly)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-caption text-ink-600">
            Parcela mensal calculada pelo número mínimo de usuários de cada faixa.
          </p>
          <div className="mt-auto pt-8">
            <ButtonLink href={SIGN_UP_URL} variant="soft" className="w-full sm:w-auto">
              Começar teste grátis
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
