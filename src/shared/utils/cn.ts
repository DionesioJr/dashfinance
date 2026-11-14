import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/*
 * A escala do design system (text-button, text-overline, ...) precisa ser registrada como tamanho de fonte;
 * sem isso o tailwind-merge a confunde com cor e a descarta ao lado de text-ink-900 ou text-primary-foreground.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display-xl",
        "display-lg",
        "display-md",
        "amount-xl",
        "amount-lg",
        "amount-md",
        "title",
        "heading",
        "body",
        "body-sm",
        "caption",
        "overline",
        "button",
        "button-lg",
      ],
      radius: ["pill", "block", "overlay"],
      shadow: ["overlay", "raised", "selected", "focus"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
