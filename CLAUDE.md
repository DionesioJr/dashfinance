# CLAUDE.md

Orientação para o Claude Code em `dashfinance/`. Regras gerais (idioma, emojis, travessão, comentários, subagentes, commits, changelog, formato das respostas) ficam no [`CLAUDE.md`](../CLAUDE.md) da raiz.

## Projeto

Site institucional do DashFinance: home (problema, como funciona, telas, preços, FAQ, chamada final), sobre, changelog público, solicitação de apresentação, termos e privacidade. Não contém a aplicação logada (que fica em `web/`).

Stack: Next.js 15 (App Router), React 19, Tailwind CSS 4, shadcn/ui (Radix UI), next-themes.

Estrutura em `src/`:

```
src/
├── app/(public)/   # Páginas públicas (home dividida em seções em home/)
├── components/
│   ├── layout/public/   # Header, footer, alternância de tema
│   └── ui/              # Componentes shadcn/ui
├── domains/
├── lib/
├── providers/
├── shared/
└── styles/
```

Comandos: `pnpm dev`, `pnpm lint` (só com autorização do usuário).

## Regras

- Imports com `@/*`. Relativo só para arquivo no mesmo diretório.
- Reutilize os componentes de `src/components/` antes de criar novos.
- Seções da home ficam em arquivos próprios em `src/app/(public)/home/` e usam as primitivas de `section-primitives.tsx`.
- Copy do site em português do Brasil, com ortografia, acentuação e pontuação corretas, sem emojis e sem travessão.
- Declare `"use client"` só quando o componente precisar de estado, efeito ou evento do navegador.
- Nunca crie arquivos `index.ts` ou `index.tsx`.
