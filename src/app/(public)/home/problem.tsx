import { Section, SectionHeading } from "./section-primitives";

const PROBLEMS = [
  {
    title: "O cliente some entre uma reunião e outra",
    text: "Sem um lugar para lançar gastos e ver as metas, ele só lembra do planejamento quando você liga.",
  },
  {
    title: "Você digita o que o cliente poderia lançar",
    text: "Antes de cada reunião, horas copiando extratos para a planilha em vez de analisar os números.",
  },
  {
    title: "O diagnóstico não mostra o valor que você cobra",
    text: "Um arquivo genérico, sem padrão e sem a sua marca, não transmite o trabalho que existe por trás dele.",
  },
  {
    title: "Crescer significa trabalhar mais horas",
    text: "Cada cliente novo é mais uma planilha para manter. A carteira trava antes da sua agenda encher.",
  },
];

/**
 * Seção que descreve as dores da consultoria sem um sistema.
 */
export default function Problem() {
  return (
    <Section>
      <SectionHeading
        eyebrow="O problema"
        title="O que a planilha não mostra."
        description="Planejamento financeiro é acompanhamento contínuo. Quando os dados ficam espalhados, o seu tempo vai para organizar arquivos, não para orientar o cliente."
      />
      <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((problem, index) => (
          <li key={problem.title} className="border-t border-line-strong pt-5">
            <p className="text-overline text-ink-500">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-heading text-ink-900">{problem.title}</h3>
            <p className="mt-2 text-body text-ink-600">{problem.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
