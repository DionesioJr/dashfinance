import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/public/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/shared/utils/cn";

export const SIGN_UP_URL = "https://app.dashfinance.com.br/sign-up";
export const SIGN_IN_URL = "https://app.dashfinance.com.br/sign-in";
export const DEMO_URL = "/request-presentation";

/**
 * Seção plana: separada da vizinha por hairline, sem caixa e sem fundo cinza.
 */
export function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("scroll-mt-16 border-t border-line-soft py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Rótulo de seção em caixa-alta (estilo overline).
 */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-overline uppercase text-ink-500", className)}>{children}</p>;
}

/**
 * Cabeçalho de seção com rótulo, título em serifa e descrição opcional.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-display-md text-ink-900 text-balance md:text-display-lg">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-body text-ink-600 text-pretty">{description}</p>}
    </div>
  );
}

const BUTTON_LINK_VARIANT = {
  solid: "default",
  soft: "secondary",
  ghost: "ghost",
  inverse: "inverse",
  inverseGhost: "inverseGhost",
} as const;

/**
 * Link com aparência de botão em cápsula. `chevron` acrescenta a seta das ações que avançam.
 */
export function ButtonLink({
  href,
  variant = "solid",
  chevron = false,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof BUTTON_LINK_VARIANT;
  chevron?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant: BUTTON_LINK_VARIANT[variant], size: "lg" }), className)}>
      {children}
      {chevron && <ChevronRight strokeWidth={1.6} aria-hidden="true" />}
    </Link>
  );
}

/**
 * Indicador do design system: rótulo, valor em amount-md e linha de apoio.
 */
export function Indicator({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div>
      <p className="text-[13px] leading-[18px] text-ink-600">{label}</p>
      <p className="mt-2 text-amount-md text-ink-900 tabular-nums">{value}</p>
      {hint && <p className="mt-1 text-caption text-ink-600">{hint}</p>}
    </div>
  );
}
