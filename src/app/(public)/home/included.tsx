import { Section, SectionHeading } from "./section-primitives";

const COLUMNS = [
  {
    label: "Para você, consultor",
    items: [
      ["Carteira de clientes", "Todos os clientes em uma lista, com acesso à visão individual de cada um."],
      ["CRM da consultoria", "Acompanhe em que etapa do relacionamento cada cliente está."],
      ["Onboarding guiado", "Cadastro completo do cliente, preenchido por ele mesmo."],
      ["Diagnóstico financeiro", "Relatório em PDF com plano de ação e histórico de versões."],
      ["Equipe de consultores", "Convide outros consultores para a sua empresa."],
      ["Sua marca", "Logo e cores da sua consultoria no aplicativo do cliente."],
    ],
  },
  {
    label: "Para o seu cliente",
    items: [
      ["Dashboard", "Receitas, despesas, saldo e próximos vencimentos."],
      ["Orçamento", "Limites por categoria, recorrências e faturas de cartão."],
      ["Metas e reserva", "Metas financeiras e reserva de emergência com progresso."],
      ["Patrimônio", "Investimentos, bens, dívidas, seguros e proteção."],
      ["Futuro", "Projeção financeira e plano de aposentadoria."],
      ["Extratos e cartão", "Importação de extratos OFX com categorização automática via IA."],
      ["Dia a dia", "Calendário financeiro, timeline de pagamentos, cofre de arquivos e assistente com IA."],
    ],
  },
];

/**
 * O que vem na plataforma, separado entre consultor e cliente.
 */
export default function Included() {
  return (
    <Section id="recursos">
      <SectionHeading
        eyebrow="O que está incluso"
        title="Uma plataforma, duas visões."
        description="Você trabalha no painel do consultor. O seu cliente usa o aplicativo da sua consultoria. Os dados são os mesmos, sem retrabalho."
      />
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        {COLUMNS.map((column) => (
          <div key={column.label}>
            <h3 className="border-b border-neutral-900 pb-3 font-mono text-xs uppercase tracking-[0.14em] text-neutral-900 dark:border-white dark:text-white">
              {column.label}
            </h3>
            <dl className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {column.items.map(([term, description]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
                  <dt className="text-[15px] font-medium text-neutral-900 dark:text-white">{term}</dt>
                  <dd className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Section>
  );
}
