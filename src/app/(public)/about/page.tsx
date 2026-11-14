import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/public/container";
import { PageIntro } from "@/components/layout/public/page-intro";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LINKEDIN_URL = "https://www.linkedin.com/in/dionesiojr/";

export default function Page() {
  return (
    <>
      <PageIntro eyebrow="Sobre" title="Quem faz o DashFinance" />
      <Container className="py-12 md:py-16">
        <Tabs defaultValue="developer" className="max-w-3xl">
          <TabsList>
            <TabsTrigger value="developer">Sobre o desenvolvedor</TabsTrigger>
            <TabsTrigger value="application">Sobre a aplicação</TabsTrigger>
          </TabsList>

          <TabsContent value="application">
            <h2 className="text-title text-ink-900">Sobre a aplicação DashFinance</h2>
            <div className="mt-6 space-y-4 text-body text-ink-600">
              <p>
                O DashFinance é uma plataforma completa de planejamento financeiro projetada para simplificar e otimizar
                a gestão financeira pessoal e empresarial. Nossa solução oferece uma interface intuitiva e recursos
                avançados para ajudar usuários a terem controle total sobre suas finanças.
              </p>
              <p>
                Nosso sistema oferece um dashboard interativo com visualização consolidada de finanças, gráficos
                personalizados, calendário financeiro integrado e métricas de desempenho em tempo real. Além disso,
                proporcionamos funcionalidades abrangentes como:
              </p>
              <ul className="border-t border-line-strong">
                {[
                  "Gestão de múltiplas contas bancárias",
                  "Controle detalhado de cartões de crédito",
                  "Planejamento financeiro com orçamentos por categoria",
                  "Acompanhamento de investimentos",
                  "Projeções financeiras anuais",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 border-b border-line-soft py-3 text-body-sm text-ink-900">
                    <span className="size-1.5 shrink-0 rounded-pill bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                O DashFinance está em constante evolução, sempre ouvindo nossos usuários para melhorar a aplicação e
                adicionar funcionalidades que realmente fazem diferença no dia a dia.
              </p>
              <p>
                Nosso objetivo é simples: fornecer uma ferramenta que simplifique o gerenciamento financeiro, permitindo
                que você tome decisões mais inteligentes e alcance seus objetivos com mais tranquilidade.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="developer">
            <div className="flex flex-wrap items-center gap-8">
              <Link href={LINKEDIN_URL} className="focus-ring rounded-pill">
                <Image
                  src="https://github.com/dionesiojr.png"
                  alt="Dionésio Guerra"
                  className="size-32 rounded-pill object-cover"
                  width={256}
                  height={256}
                />
              </Link>
              <Link href={LINKEDIN_URL} className="focus-ring">
                <p className="text-overline uppercase text-ink-500">Fundador e desenvolvedor</p>
                <p className="mt-2 text-title text-ink-900">Dionésio Guerra</p>
              </Link>
            </div>
            <div className="mt-8 space-y-4 text-body text-ink-600">
              <p>
                Minha jornada no mundo da tecnologia começou com uma paixão: transformar desafios em soluções que
                realmente fazem a diferença na vida das pessoas.
              </p>
              <p>
                Depois de anos trabalhando com desenvolvimento de software, percebi uma lacuna importante: a necessidade
                de uma ferramenta simples e poderosa para gerenciar finanças de forma eficiente.
              </p>
              <p>
                Venho de uma trajetória onde sempre busquei ir além do código. Meu objetivo não é apenas desenvolver
                software, mas criar soluções que resolvam problemas reais. No DashFinance, uni minhas experiências em
                tecnologias para criar algo verdadeiramente útil.
              </p>
              <p>
                Observei de perto os desafios que as pessoas enfrentam no dia a dia: a complexidade de gerenciar finanças
                e manter o controle financeiro. Foi assim que nasceu o DashFinance, não como mais um dashboard, mas como
                uma ferramenta que realmente entende as necessidades de quem está na linha de frente.
              </p>
              <p>
                Minha filosofia é simples: tecnologia deve simplificar, não complicar. Quero que o DashFinance seja mais
                do que um produto: quero que seja um parceiro no seu planejamento financeiro, ajudando você a tomar
                decisões mais inteligentes e alcançar seus objetivos com mais clareza.
              </p>
              <p>
                Se você tem ideias, sugestões ou simplesmente quer trocar uma ideia sobre finanças e tecnologia, estou
                sempre aberto ao diálogo. Juntos, podemos construir algo ainda melhor.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
}
