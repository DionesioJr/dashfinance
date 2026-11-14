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
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:gap-12">
        <SectionHeading
          eyebrow="A sua consultoria hoje"
          title="Se isso parece com a sua rotina, o DashFinance é para você."
          description="Profissionais que acompanham a vida financeira de vários clientes ao mesmo tempo e ainda dependem de planilha e mensagem para isso."
        />
        <ul className="self-end border-t border-line-strong">
          {SIGNS.map((sign) => (
            <li key={sign} className="flex items-start gap-4 border-b border-line-soft py-5 text-body-sm text-ink-900">
              <Check className="mt-0.5 size-[18px] shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              {sign}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
