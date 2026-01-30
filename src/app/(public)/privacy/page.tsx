export default function Page() {
  return (
    <div className="flex justify-center items-center py-10 min-h-screen bg-background transition-colors duration-300 mt-20">
      <div className="w-full max-w-4xl p-6 md:p-8 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-50">
            Política de Privacidade
          </h1>
        </header>

        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            A DashFinance (<span className="text-blue-500">nós</span>,<span className="text-blue-500">nosso</span>)
            respeita a privacidade de seus usuários (<span className="text-blue-500">você</span>) e está comprometida em
            proteger as informações pessoais que você compartilha conosco ao usar nossa Plataforma de Gerenciamento de
            Projetos e Times. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas
            informações ao acessar e usar o sistema DashFinance.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Coleta de Informações</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Ao utilizar o sistema DashFinance, podemos coletar informações pessoais que você nos fornece
            voluntariamente, como seu nome, endereço de e-mail e outras informações de contato. Também podemos coletar
            informações sobre como você usa nossa plataforma, incluindo preferências de configuração e interações com
            funcionalidades do sistema.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Uso de Informações</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Utilizamos suas informações para fornecer, personalizar e melhorar nossos serviços, incluindo suporte
            técnico, recomendações de uso e relatórios detalhados. Também podemos utilizar suas informações para
            comunicações promocionais, mediante seu consentimento prévio.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Compartilhamento de Informações
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto conforme descrito
            nesta Política de Privacidade. Podemos compartilhar informações com parceiros e prestadores de serviços para
            apoiar as operações da plataforma, sob acordos de confidencialidade rigorosos.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Segurança de Dados</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            A segurança de suas informações pessoais é prioridade para nós. Implementamos medidas técnicas e
            organizacionais adequadas para prevenir acessos não autorizados, alterações ou destruição de dados.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Seus Direitos</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Você pode solicitar acesso, correção ou exclusão de suas informações pessoais a qualquer momento. Para
            exercer esses direitos ou tirar dúvidas sobre nossa Política de Privacidade, entre em contato pelo suporte.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Alterações na Política de Privacidade
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a revise regularmente
            para estar sempre informado sobre como protegemos suas informações.
          </p>
        </div>

        <footer className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">Última atualização: 15 de janeiro de 2025.</p>
        </footer>
      </div>
    </div>
  );
}
