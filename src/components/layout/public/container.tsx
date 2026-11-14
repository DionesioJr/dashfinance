import { cn } from "@/shared/utils/cn";

/**
 * Largura de conteúdo do site (layout-content-max) com a margem lateral do design system.
 */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1216px] px-4 sm:px-6 lg:px-12", className)}>{children}</div>;
}
