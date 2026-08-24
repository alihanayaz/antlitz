"use client";

import { useTheme } from "next-themes";
import { Button, Icon } from "antlitz";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Icon size={16} className="dark:hidden">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </Icon>
      <Icon size={16} className="hidden dark:inline-block">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </Icon>

      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
    </Button>
  );
}
