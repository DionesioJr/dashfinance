import { Plus } from "lucide-react";

import { Section, SectionHeading } from "./section-primitives";

const QUESTIONS = [
  {
    q: "O DashFinance é para mim ou para o meu cliente?",
    a: "Para os dois. Você trabalha no painel do consultor, com a carteira, o CRM e os diagnósticos. Os seus clientes acessam o aplicativo da sua consultoria para lançar dados e acompanhar o planejamento.",
  },
  {
    q: "Meus clientes vão ver a minha marca?",
    a: "Sim. Você configura o logo e as cores da sua consultoria, e o aplicativo do cliente passa a usar essa identidade.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. A plataforma funciona no navegador, no computador ou no celular, para você e para os seus clientes.",
  },
  {
    q: "Consigo trazer os dados que eu já tenho?",
    a: "Sim. Há importação em lote de dados e conexão com contas bancárias por Open Finance, para que o cliente não precise digitar tudo de novo.",
  },
  {
    q: "Quem consegue ver os dados de cada cliente?",
    a: "Cada cliente vê apenas os próprios dados. Os consultores acessam somente os clientes da empresa à qual estão vinculados.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "O valor é mensal e calculado por usuário, com desconto por faixa de volume: de R$ 80 (a partir de 1 usuário) até R$ 25 por usuário (a partir de 100). O contrato tem duração anual com renovação automática.",
  },
  {
    q: "Que tipo de suporte está incluso?",
    a: "Todos os planos têm canal de atendimento, correção de falhas, vídeos tutoriais e manuais. Acima de 100 usuários, o suporte é prioritário, com reunião de onboarding, treinamento da equipe e SLA conforme contrato.",
  },
  {
    q: "Como funciona o teste grátis?",
    a: "Você cria a sua conta e explora a plataforma antes de assinar. Se preferir conhecer com alguém da nossa equipe, agende uma demonstração.",
  },
];

/**
 * Perguntas frequentes em formato de acordeão nativo.
 */
export default function Faq() {
  return (
    <Section id="perguntas">
      <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:gap-12">
        <SectionHeading eyebrow="Perguntas frequentes" title="O que os consultores perguntam antes de começar." />
        <div className="border-t border-line-strong">
          {QUESTIONS.map((item) => (
            <details key={item.q} className="group border-b border-line-soft">
              <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 text-heading text-ink-900 marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-[18px] shrink-0 text-ink-500 transition-transform group-open:rotate-45"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </summary>
              <p className="pr-10 pb-5 text-body text-ink-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
