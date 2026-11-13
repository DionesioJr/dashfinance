import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Produto",
    links: [
      { name: "Como funciona", href: "/#como-funciona" },
      { name: "Recursos", href: "/#recursos" },
      { name: "Preços", href: "/#precos" },
      { name: "Perguntas frequentes", href: "/#perguntas" },
    ],
  },
  {
    title: "DashFinance",
    links: [
      { name: "Sobre", href: "/about" },
      { name: "Novidades", href: "/changelog" },
      { name: "Agendar demonstração", href: "/request-presentation" },
      { name: "contato@dashfinance.com.br", href: "mailto:contato@dashfinance.com.br" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Termos de uso", href: "/terms" },
      { name: "Política de privacidade", href: "/privacy" },
    ],
  },
];

/**
 * Rodapé do site público.
 */
export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#0b0b0b]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="DashFinance, página inicial">
              <Image src="/logo-light.svg" alt="DashFinance" width={130} height={32} className="h-7 w-auto dark:hidden" />
              <Image src="/logo-dark.svg" alt="DashFinance" width={130} height={32} className="hidden h-7 w-auto dark:block" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              O sistema da sua consultoria financeira, do onboarding ao acompanhamento, com a sua marca.
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">{section.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="break-words text-sm text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800">
          &copy; {new Date().getFullYear()} DashFinance. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
