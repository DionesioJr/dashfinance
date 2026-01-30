"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Garante que o componente seja montado no lado do cliente
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark" || (theme === "system" && systemTheme === "dark")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // Evita que o tema seja aplicado incorretamente antes do lado do cliente
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center hover:opacity-75 cursor-pointer" onClick={toggleTheme} aria-label="Alternar tema">
      <Button
        variant="ghost"
        size="icon"
        className="p-2 flex items-center hover:opacity-75 cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {/* Ícones animados para alternar entre Sol e Lua */}
        {/* mude a cor do sol para amarelo e da lua para azul */}
        <Sun
          className={`h-[1.2rem] w-[1.2rem] absolute transition-all text-yellow-600 ${
            theme === "dark" || (theme === "system" && systemTheme === "dark")
              ? "scale-0 -rotate-90"
              : "scale-100 rotate-0"
          }`}
        />
        <Moon
          className={`h-[1.2rem] w-[1.2rem] absolute transition-all text-blue-500 ${
            theme === "dark" || (theme === "system" && systemTheme === "dark")
              ? "scale-100 rotate-0"
              : "scale-0 rotate-90"
          }`}
        />
      </Button>
    </div>
  );
}
