import Link from "next/link";

import { BrandMark } from "./brand-mark";
import { Container } from "./container";

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
    <footer className="border-t border-line-soft bg-surface-base">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="focus-ring inline-flex rounded-[7px]" aria-label="DashFinance, página inicial">
              <BrandMark />
            </Link>
            <p className="mt-4 max-w-xs text-body text-ink-600">
              O sistema da sua consultoria financeira, do onboarding ao acompanhamento, com a sua marca.
            </p>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="text-overline uppercase text-ink-500">{section.title}</h3>
              <ul className="mt-4 space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="focus-ring inline-block break-words py-1.5 text-body-sm text-ink-600 transition-colors hover:text-ink-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-line-soft pt-6 text-caption text-ink-500">
          &copy; {new Date().getFullYear()} DashFinance. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
