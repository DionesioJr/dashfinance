import { Container } from "./container";

/**
 * Abertura das páginas internas: rótulo, título em serifa e descrição opcional.
 */
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-line-soft pt-32 pb-12 md:pt-36 md:pb-16">
      <Container>
        <p className="text-overline uppercase text-ink-500">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-display-md text-ink-900 text-balance md:text-display-lg">
          {title}
        </h1>
        {description && <p className="mt-4 max-w-2xl text-body text-ink-600 text-pretty">{description}</p>}
      </Container>
    </div>
  );
}
