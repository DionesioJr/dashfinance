import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/utils/cn";

/**
 * Botões do design system: cápsulas em cor sólida, texto em caixa-alta espaçada.
 * default = cápsula escura; secondary = cápsula; ghost = fantasma; inverse e inverseGhost = sobre o mármore.
 */
const buttonVariants = cva(
  "focus-ring inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-pill text-button uppercase transition-colors disabled:cursor-not-allowed disabled:bg-state-disabled disabled:text-on-inverse [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary: "bg-brand-100 text-ink-900 hover:bg-brand-150",
        ghost: "bg-transparent text-ink-900 hover:bg-surface-selected",
        inverse: "bg-on-inverse text-brand-800 hover:bg-on-inverse/85",
        inverseGhost: "border-[1.5px] border-on-inverse-muted bg-transparent text-on-inverse hover:bg-on-inverse/10",
      },
      size: {
        default: "h-9 px-5",
        lg: "h-11 px-6",
        icon: "size-11 [&_svg:not([class*='size-'])]:size-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
