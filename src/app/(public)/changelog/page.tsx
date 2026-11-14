import { Container } from "@/components/layout/public/container";
import { PageIntro } from "@/components/layout/public/page-intro";

const changelogData = [
  {
    date: "4 de julho de 2025",
    version: "v0.3.0",
    title: "Dashboard gerencial e análise de dados",
    description:
      "Implementamos um dashboard gerencial completo com indicadores e gráficos para acompanhamento do desempenho do escritório.",
    features: [
      "Dashboard com indicadores de desempenho da equipe",
      "Monitoramento de profissionais ativos e inativos",
      "Taxa de retenção da equipe",
      "Média de clientes por profissional",
      "Indicadores financeiros com AUM (patrimônio sob gestão)",
      "Acompanhamento de receita mensal e ticket médio",
      "Análise de crescimento de receita",
      "Métricas de clientes (total, retenção, novos clientes)",
      "Taxa de conversão de leads",
      "Gráficos interativos de evolução patrimonial",
      "Visualização de conversão de leads",
      "Gráfico de performance da equipe",
      "Análise de retenção de clientes",
      "Cards estatísticos com tendências e comparativos",
      "Layout responsivo e adaptável",
    ],
  },
  {
    date: "21 de janeiro de 2025",
    version: "v0.2.0",
    title: "Novas funcionalidades e melhorias",
    description:
      "Estamos lançando uma atualização importante com novas telas, ajustes e componentes para tornar o DashFinance ainda mais funcional e intuitivo.",
    features: [
      "Novas telas",
      "Ajuste na tela de login",
      "Tela de cadastro",
      "Tela para recuperar a senha",
      "Tela Sobre",
      "Tela de privacidade",
      "Tela de termos",
      "Atualização do site (estrutura e informação)",
      "Estrutura do layout separada em módulos",
      "Mock de projeto e de tarefas",
      "Novo componente de tabela de dados para tarefas",
    ],
  },
  {
    date: "20 de janeiro de 2025",
    version: "v0.1.0",
    title: "Início do projeto",
    description: "Hoje anunciamos o início do DashFinance.",
    features: [
      "Criação do projeto",
      "Definição do nome do projeto",
      "Deploy online",
      "Tela de login implementada",
      "Tela de dashboard liberada",
    ],
  },
];

export default function Changelog() {
  return (
    <>
      <PageIntro eyebrow="Novidades" title="Histórico de atualizações" />
      <Container className="py-12 md:py-16">
        {changelogData.map((log) => (
          <article
            key={log.version}
            className="grid gap-4 border-b border-line-soft py-10 first:pt-0 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-12"
          >
            <div>
              <p className="text-body-sm text-ink-600">{log.date}</p>
              <span className="mt-2 inline-flex h-7 items-center rounded-pill bg-brand-050 px-3 text-[13px] text-ink-900 tabular-nums">
                {log.version}
              </span>
            </div>
            <div className="max-w-2xl">
              <h2 className="text-title text-ink-900">{log.title}</h2>
              <p className="mt-3 text-body text-ink-600">{log.description}</p>
              <ul className="mt-6 border-t border-line-strong">
                {log.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 border-b border-line-soft py-3 text-body-sm text-ink-900"
                  >
                    <span className="size-1.5 shrink-0 rounded-pill bg-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Container>
    </>
  );
}
