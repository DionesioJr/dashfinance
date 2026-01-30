const changelogData = [
  {
    date: "04 de Julho de 2025",
    version: "v 0.3.0",
    title: "Dashboard Gerencial e Análise de Dados",
    description:
      "Implementamos um dashboard gerencial completo com indicadores e gráficos para acompanhamento do desempenho do escritório.",
    features: [
      "Dashboard com indicadores de desempenho da equipe",
      "Monitoramento de profissionais ativos e inativos",
      "Taxa de retenção da equipe",
      "Média de clientes por profissional",
      "Indicadores financeiros com AUM (Patrimônio sob Gestão)",
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
    date: "21 de Janeiro de 2025",
    version: "v 0.2.0",
    title: "Novas Funcionalidades e Melhorias",
    description:
      "Estamos lançando uma atualização importante com novas telas, ajustes e componentes para tornar o DashFinance ainda mais funcional e intuitivo.",
    features: [
      "Implementei novas telas",
      "Ajuste na tela de login",
      "Criei tela de cadastro",
      "Criei tela para recuperar senha",
      "Tela de sobre",
      "Tela de privacidade",
      "Tela de termos",
      "Atualização do site (estrutura e informação)",
      "Separei a estrutura do layout em módulos",
      "Adicionei mock de projeto e de tarefas",
      "Adicionei novo componente de data-table para tarefas",
    ],
  },
  {
    date: "20 de Janeiro de 2025",
    version: "v 0.1.0",
    title: "Inicialização do Projeto",
    description:
      "Hoje estamos animados em anunciar a inicialização do DashFinance! Uma ferramenta de gerenciamento de projetos projetada para ajudar você a otimizar seu fluxo de trabalho e aumentar a produtividade.",
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
    <main className="min-h-screen flex flex-col bg-background text-gray-900 dark:text-gray-200 mt-20">
      {/* Changelog Section */}
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-semibold text-center mb-12">Histórico de Atualizações</h1>
        <div className="space-y-12">
          {changelogData.map((log, index) => (
            <article
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-8 border-b border-gray-300 dark:border-gray-700 pb-8 last:border-b-0"
            >
              {/* Data e Versão */}
              <div className="shrink-0 w-full lg:w-1/4 text-center lg:text-left">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{log.date}</h2>
                <span className="inline-flex items-center px-3 py-1 mt-2 rounded-md text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800">
                  {log.version}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{log.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{log.description}</p>
                {log.features && (
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-400 space-y-1">
                    {log.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
