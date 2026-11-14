import { LegalPage } from "@/components/layout/public/legal-page";

export default function Page() {
  return (
    <LegalPage title="Termos de uso" updatedAt="23 de janeiro de 2025">
      <p>
        Bem-vindo ao sistema DashFinance, uma plataforma integrada para gerenciar suas finanças (
        <strong>Plataforma</strong>), operada pela DashFinance (<strong>nós</strong>, <strong>nosso</strong>). Ao
        acessar ou usar a Plataforma, você (<strong>Usuário</strong>) concorda em estar vinculado por estes Termos de Uso
        (<strong>Termos</strong>). Caso não concorde com quaisquer termos aqui dispostos, solicitamos que interrompa o uso
        da Plataforma imediatamente.
      </p>

      <h2>Definições</h2>
      <p>Para efeitos destes Termos:</p>
      <ul className="mb-4 list-disc space-y-2 pl-5">
        <li>
          <strong>Plataforma</strong>: refere-se ao sistema DashFinance, voltado ao planejamento e à gestão financeira de
          pessoas, consultorias e empresas.
        </li>
        <li>
          <strong>Usuário</strong>: pessoa física ou jurídica cadastrada para utilizar a Plataforma.
        </li>
        <li>
          <strong>Dados Pessoais</strong>: informações relacionadas a uma pessoa natural identificada ou identificável,
          fornecidas durante o cadastro ou o uso da Plataforma.
        </li>
      </ul>

      <h2>Licença de uso</h2>
      <p>
        A DashFinance concede ao Usuário uma licença pessoal, não exclusiva, intransferível e revogável para acessar e
        usar a Plataforma, conforme previsto nestes Termos. Esta licença é válida enquanto o Usuário estiver em
        conformidade com os Termos e não pode ser usada para fins comerciais sem autorização prévia da DashFinance.
      </p>

      <h2>Limitações de responsabilidade</h2>
      <p>A DashFinance não se responsabiliza por danos ou prejuízos decorrentes de:</p>
      <ul className="mb-4 list-disc space-y-2 pl-5">
        <li>Uso indevido da Plataforma pelo Usuário;</li>
        <li>Interrupções ou falhas de conexão à internet;</li>
        <li>Conteúdo de terceiros integrado à Plataforma;</li>
        <li>Erros ou inconsistências no funcionamento da Plataforma.</li>
      </ul>
      <p>
        O Usuário reconhece que a DashFinance é uma solução em constante evolução e que funcionalidades podem ser
        adicionadas, alteradas ou removidas sem aviso prévio.
      </p>

      <h2>Política de privacidade</h2>
      <p>
        Ao utilizar a Plataforma, o Usuário consente com a coleta, o armazenamento e o tratamento de seus Dados Pessoais,
        conforme descrito na nossa Política de Privacidade. Para mais informações, acesse a página dedicada à privacidade
        no site oficial da DashFinance.
      </p>
    </LegalPage>
  );
}
