import { Section, SectionHeading } from "./section-primitives";

const PROFILES = [
  {
    label: "Consultor autônomo",
    title: "Você atende sozinho e quer parar de depender de planilha.",
    items: ["Toda a carteira em uma conta", "Aplicativo com a sua marca para os clientes", "Diagnóstico pronto para enviar em PDF"],
  },
  {
    label: "Escritório com equipe",
    title: "Vários consultores atendendo a mesma base de clientes.",
    items: ["Convite de consultores para a empresa", "Clientes vinculados a cada consultor", "Painel da empresa com a visão do escritório"],
  },
];

/**
 * Perfis de profissionais atendidos pela plataforma, em colunas separadas por hairline.
 */
export default function Audience() {
  return (
    <Section id="para-quem">
      <SectionHeading eyebrow="Para quem" title="Do consultor autônomo ao escritório com equipe." />
      <div className="mt-12 grid gap-12 border-t border-line-soft pt-10 md:grid-cols-2 md:gap-0">
        {PROFILES.map((profile, index) => (
          <div key={profile.label} className={index > 0 ? "md:border-l md:border-line-soft md:pl-12" : "md:pr-12"}>
            <p className="text-overline uppercase text-ink-500">{profile.label}</p>
            <h3 className="mt-3 max-w-md text-title text-ink-900">{profile.title}</h3>
            <ul className="mt-6 space-y-3">
              {profile.items.map((item) => (
                <li key={item} className="flex items-center gap-4 text-body-sm text-ink-900">
                  <span className="size-1.5 shrink-0 rounded-pill bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
