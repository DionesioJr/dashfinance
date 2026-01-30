export default function Page() {
  return (
    <div className="flex justify-center items-center py-10 min-h-screen bg-background transition-colors duration-300 mt-20">
      <div className="w-full max-w-4xl p-6 md:p-8 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-50">Termos de Uso</h1>
        </header>
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Bem-vindo ao sistema DashFinance, uma Plataforma Integrada de para gerenciar suas finanças (
            <span className="text-blue-500">Plataforma</span>), operada pela DashFinance (
            <span className="text-blue-500">nós</span>,<span className="text-blue-500">nosso</span>). Ao acessar ou usar
            a Plataforma, você (<span className="text-blue-500">Usuário</span>) concorda em estar vinculado por estes
            Termos de Uso (<span className="text-blue-500">Termos</span>). Caso não concorde com quaisquer termos aqui
            dispostos, solicitamos que interrompa o uso da Plataforma imediatamente.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Definições</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Para efeitos destes Termos:
            <br />
            <span className="text-blue-500">Plataforma</span>: Refere-se ao sistema DashFinance, voltado ao
            gerenciamento de projetos, tarefas e equipes.
            <br />
            <span className="text-blue-500">Usuário</span>: Pessoa física ou jurídica cadastrada para utilizar a
            Plataforma.
            <br />
            <span className="text-blue-500">Dados Pessoais</span>: Informações relacionadas a uma pessoa natural
            identificada ou identificável, fornecidas durante o cadastro ou o uso da Plataforma.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Licença de Uso</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            A DashFinance concede ao Usuário uma licença pessoal, não exclusiva, intransferível e revogável para acessar
            e usar a Plataforma, conforme previsto nestes Termos. Esta licença é válida enquanto o Usuário estiver em
            conformidade com os Termos e não pode ser usada para fins comerciais sem autorização prévia da DashFinance.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Limitações de Responsabilidade
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            A DashFinance não se responsabiliza por danos ou prejuízos decorrentes de:
            <ul className="list-disc ml-6">
              <li>Uso indevido da Plataforma pelo Usuário;</li>
              <li>Interrupções ou falhas de conexão à internet;</li>
              <li>Conteúdo de terceiros integrado à Plataforma;</li>
              <li>Erros ou inconsistências no funcionamento da Plataforma.</li>
            </ul>
            O Usuário reconhece que a DashFinance é uma solução em constante evolução e que funcionalidades podem ser
            adicionadas, alteradas ou removidas sem aviso prévio.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Política de Privacidade</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Ao utilizar a Plataforma, o Usuário consente com a coleta, o armazenamento e o tratamento de seus Dados
            Pessoais, conforme descrito na nossa Política de Privacidade. Para mais informações, acesse a página
            dedicada à privacidade no site oficial da DashFinance.
          </p>
        </div>

        <footer className="text-gray-600 dark:text-gray-400 text-sm text-center mt-6">
          Última atualização: 23 de janeiro de 2025.
        </footer>
      </div>
    </div>
  );
}
