import Link from "next/link";

import { cn } from "@/shared/utils/cn";

export const SIGN_UP_URL = "https://app.dashfinance.com.br/sign-up";
export const SIGN_IN_URL = "https://app.dashfinance.com.br/sign-in";
export const DEMO_URL = "/request-presentation";

/**
 * Bloco de seção com largura padrão e borda superior fina.
 */
export function Section({
  id,
  muted = false,
  className,
  children,
}: {
  id?: string;
  muted?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-neutral-200 py-20 md:py-28 dark:border-neutral-800",
        muted ? "bg-[#f7f7f5] dark:bg-neutral-950" : "bg-white dark:bg-[#0b0b0b]",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

/**
 * Rótulo curto em fonte monoespaçada acima dos títulos.
 */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Cabeçalho de seção com rótulo, título e descrição opcional.
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
      <h2 className="mt-3 text-3xl font-medium leading-[1.1] tracking-tight text-neutral-900 text-balance md:text-[40px] dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-neutral-600 text-pretty dark:text-neutral-400">{description}</p>
      )}
    </div>
  );
}

/**
 * Link com aparência de botão, nas variantes sólida e contornada.
 */
export function ButtonLink({
  href,
  variant = "solid",
  className,
  children,
}: {
  href: string;
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-[4px] px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600",
        variant === "solid"
          ? "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          : "border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-900 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:border-neutral-400",
        className,
      )}
    >
      {children}
    </Link>
  );
}
