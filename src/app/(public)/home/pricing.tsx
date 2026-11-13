import { ArrowRight, Check } from "lucide-react";

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

/**
 * Seção de preços por usuário, com faixas de volume e o plano ideal em destaque.
 */
export default function Pricing() {
  return (
    <Section id="precos">
      <SectionHeading
        eyebrow="Investimento"
        title="Quanto mais usuários, menor o valor por usuário."
        description="Todos os valores são mensais. Contrato com duração anual e renovação automática. Todos os planos incluem a plataforma completa."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-md border border-neutral-900 bg-white p-6 md:p-10 dark:border-white dark:bg-[#0b0b0b]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
                Plano Ideal · {IDEAL.users} usuários
              </p>
              <p className="mt-4 flex items-baseline gap-1 text-neutral-900 dark:text-white">
                <span className="text-lg">R$</span>
                <span className="text-6xl font-medium tracking-tight tabular-nums">{IDEAL.perUser}</span>
                <span className="text-base text-neutral-500">/usuário por mês</span>
              </p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                A partir de R$ {brl(IDEAL.monthly)}/mês para {IDEAL.users} usuários.
              </p>
            </div>
            <span className="rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              Melhor valor
            </span>
          </div>

          <ul className="mt-8 space-y-3 border-t border-neutral-200 pt-8 dark:border-neutral-800">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-neutral-800 dark:text-neutral-200">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
            Exclusivo para {IDEAL.users} usuários
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {IDEAL_EXTRAS.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-neutral-800 dark:text-neutral-200">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>

          <ButtonLink href={DEMO_URL} className="mt-8 w-full sm:w-auto">
            Solicitar proposta
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>

        <div className="flex flex-col rounded-md border border-neutral-200 bg-white p-6 md:p-10 dark:border-neutral-800 dark:bg-[#0b0b0b]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">Outras opções</p>
          <table className="mt-6 w-full text-left text-[15px]">
            <thead>
              <tr className="border-b border-neutral-900 text-xs uppercase tracking-[0.08em] text-neutral-500 dark:border-white">
                <th scope="col" className="py-3 font-medium">Usuários</th>
                <th scope="col" className="py-3 text-right font-medium">Por usuário</th>
                <th scope="col" className="py-3 text-right font-medium">Parcela/mês</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 tabular-nums dark:divide-neutral-800">
              {TIERS.map((tier) => (
                <tr key={tier.users} className="text-neutral-800 dark:text-neutral-200">
                  <td className="py-3 font-medium">{tier.users}</td>
                  <td className="py-3 text-right">R$ {brl(tier.perUser)}</td>
                  <td className="py-3 text-right">R$ {brl(tier.monthly)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Parcela mensal calculada pelo número mínimo de usuários de cada faixa.
          </p>
          <div className="mt-auto pt-8">
            <ButtonLink href={SIGN_UP_URL} variant="outline" className="w-full sm:w-auto">
              Começar teste grátis
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
