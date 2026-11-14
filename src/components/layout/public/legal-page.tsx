import { Container } from "./container";
import { PageIntro } from "./page-intro";

/**
 * Página de texto legal: coluna de leitura com seções separadas por título.
 */
export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageIntro eyebrow="Legal" title={title} />
      <Container className="py-12 md:py-16">
        <article className="max-w-[720px] text-body text-ink-600 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-heading [&_h2]:text-ink-900 [&_p]:mb-4 [&_strong]:font-medium [&_strong]:text-ink-900">
          {children}
          <p className="mt-12 border-t border-line-soft pt-6 text-caption text-ink-500">Última atualização: {updatedAt}.</p>
        </article>
      </Container>
    </>
  );
}
