import { Check } from "lucide-react";

import { Section, SectionHeading } from "./section-primitives";

const SIGNS = [
  "Cada cliente tem uma planilha diferente, em uma versão diferente",
  "Extratos e comprovantes chegam soltos pelo WhatsApp",
  "O relatório de diagnóstico é montado à mão, no Word ou no PowerPoint",
  "Você não sabe, de cabeça, quais clientes estão sem acompanhamento",
];

/**
 * Seção de identificação: o consultor reconhece a própria rotina.
 */
export default function Fit() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <SectionHeading
          eyebrow="A sua consultoria hoje"
          title="Se isso parece com a sua rotina, o DashFinance é para você."
          description="Profissionais que acompanham a vida financeira de vários clientes ao mesmo tempo e ainda dependem de planilha e mensagem para isso."
        />
        <ul className="self-start divide-y divide-neutral-200 rounded-md border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {SIGNS.map((sign) => (
            <li key={sign} className="flex items-start gap-3 px-5 py-4 text-[15px] text-neutral-800 dark:text-neutral-200">
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
              {sign}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
