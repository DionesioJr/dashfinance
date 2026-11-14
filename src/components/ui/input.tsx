import * as React from "react";

import { cn } from "@/shared/utils/cn";

/**
 * Campo do design system: só a linha inferior, sem fundo e sem padding lateral.
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-none border-0 border-b border-line-strong bg-transparent px-0 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-ink-400",
        "focus:border-ink-900 focus-visible:shadow-[0_1px_0_0_var(--ink-900)]",
        "disabled:cursor-not-allowed disabled:border-line-soft disabled:text-ink-400",
        "aria-invalid:border-state-negative",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
