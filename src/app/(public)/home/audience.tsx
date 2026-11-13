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
 * Perfis de profissionais atendidos pela plataforma.
 */
export default function Audience() {
  return (
    <Section id="para-quem" muted>
      <SectionHeading eyebrow="Para quem" title="Do consultor autônomo ao escritório com equipe." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PROFILES.map((profile) => (
          <div key={profile.label} className="rounded-md border border-neutral-200 p-6 md:p-8 dark:border-neutral-800">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
              {profile.label}
            </p>
            <h3 className="mt-3 text-xl font-medium leading-snug text-neutral-900 dark:text-white">{profile.title}</h3>
            <ul className="mt-6 space-y-2.5">
              {profile.items.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-neutral-700 dark:text-neutral-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400" aria-hidden />
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
