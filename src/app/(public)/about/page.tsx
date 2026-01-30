import Image from "next/image";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="flex justify-center  py-10 min-h-screen bg-background transition-colors duration-300 mt-20">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl px-4 py-6 ">
        <div className="w-full">
          <Tabs defaultValue="developer">
            <TabsList className="mb-4">
              <TabsTrigger value="developer">Sobre o Desenvolvedor</TabsTrigger>
              <TabsTrigger value="application">Sobre a Aplicação</TabsTrigger>
            </TabsList>
            <TabsContent value="application">
              <div>
                <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-50">
                  Sobre a Aplicação DashFinance
                </h1>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    O DashFinance é uma plataforma completa de planejamento financeiro projetada para simplificar e
                    otimizar a gestão financeira pessoal e empresarial. Nossa solução oferece uma interface intuitiva e
                    recursos avançados para ajudar usuários a terem controle total sobre suas finanças.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nosso sistema oferece um dashboard interativo com visualização consolidada de finanças, gráficos
                    personalizados, calendário financeiro integrado e métricas de desempenho em tempo real. Além disso,
                    proporcionamos funcionalidades abrangentes como:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                    <li>Gestão de múltiplas contas bancárias</li>
                    <li>Controle detalhado de cartões de crédito</li>
                    <li>Planejamento financeiro com orçamentos por categoria</li>
                    <li>Acompanhamento de investimentos</li>
                    <li>Projeções financeiras anuais</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    O DashFinance está em constante evolução, sempre ouvindo nossos usuários para melhorar a aplicação e
                    adicionar funcionalidades que realmente fazem diferença no dia a dia.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nosso objetivo é simples: fornecer uma ferramenta que simplifique o gerenciamento financeiro,
                    permitindo que você tome decisões mais inteligentes e alcance seus objetivos com mais tranquilidade.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="developer">
              <div>
                <div className="flex flex-wrap items-center gap-6 py-6">
                  <Link href="https://www.linkedin.com/in/dionesiojr/">
                    <Image
                      src="https://github.com/dionesiojr.png"
                      alt="Dionésio Guerra"
                      className="w-40 h-40 rounded-full object-cover"
                      width={500}
                      height={500}
                      quality={100}
                    />
                  </Link>
                  <div>
                    <Link href="https://www.linkedin.com/in/dionesiojr/">
                      <p className=" font-mono">Fundador | Desenvolvedor</p>
                      <p className="text-lg font-semibold text-gray-950">Dionésio Guerra</p>
                    </Link>
                    <p className="text-gray-700 dark:text-gray-300 mt-4">
                      Minha jornada no mundo da tecnologia começou com uma paixão: transformar desafios em soluções que
                      realmente fazem a diferença na vida das pessoas.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Depois de anos trabalhando com desenvolvimento de software, percebi uma lacuna importante: a
                      necessidade de uma ferramenta simples e poderosa para gerenciar finanças de forma eficiente.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Venho de uma trajetória onde sempre busquei ir além do código. Meu objetivo não é apenas desenvolver
                    software, mas criar soluções que resolvam problemas reais. No DashFinance, uni minhas experiências
                    em tecnologias para criar algo verdadeiramente útil.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Observei de perto os desafios que as pessoas enfrentam no dia a dia: a complexidade de gerenciar
                    finanças e manter o controle financeiro. Foi assim que nasceu o DashFinance - não como mais um
                    dashboard, mas como uma ferramenta que realmente entende as necessidades de quem está na linha de
                    frente.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Minha filosofia é simples: tecnologia deve simplificar, não complicar. Quero que o DashFinance seja
                    mais do que um produto - quero que seja um parceiro no seu planejamento financeiro, ajudando você a
                    tomar decisões mais inteligentes e alcançar seus objetivos com mais clareza.
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Se você tem ideias, sugestões ou simplesmente quer trocar uma ideia sobre finanças e tecnologia, estou
                  sempre aberto ao diálogo. Juntos, podemos construir algo ainda mais incrível!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
