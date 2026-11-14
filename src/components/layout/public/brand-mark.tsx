import Image from "next/image";

import { cn } from "@/shared/utils/cn";

/**
 * Logotipo do DashFinance nas cores do design system, com a versão clara e a escura trocadas pelo tema.
 */
export function BrandMark({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span className={cn("inline-flex", className)}>
      <Image
        src="/logo-light.svg"
        alt="DashFinance"
        width={719}
        height={156}
        priority={priority}
        className="h-7 w-auto dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="DashFinance"
        width={719}
        height={156}
        priority={priority}
        className="hidden h-7 w-auto dark:block"
      />
    </span>
  );
}
