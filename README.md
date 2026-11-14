# DashFinance: site institucional

Site público do DashFinance, voltado a planejadores, consultores e assessores financeiros. A aplicação logada fica em `web/`; aqui ficam apenas as páginas de apresentação.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home: problema, como funciona, telas do aplicativo, recursos, preços, perguntas frequentes e chamada final |
| `/about` | Sobre o fundador e a aplicação |
| `/changelog` | Histórico público de atualizações |
| `/request-presentation` | Solicitação de apresentação |
| `/terms` e `/privacy` | Termos de uso e Política de privacidade |

## Tecnologias

- Next.js 15 (App Router) e React 19
- Tailwind CSS 4 e shadcn/ui (Radix UI)
- next-themes (tema claro e escuro)

## Design system

O visual segue o design system do DashFinance, o mesmo de `web/`:

- Tokens em `src/styles/tokens/` (cores, estados semânticos e formas) e ponte com o Tailwind em `src/styles/theme.css`.
- Fontes Gilda Display (títulos) e Inter Tight (texto), carregadas em `src/app/layout.tsx`.
- Escala tipográfica em classes como `text-display-lg`, `text-body-sm` e `text-overline`. O `cn` de `src/shared/utils/cn.ts` conhece essa escala; use sempre ele para combinar classes.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

O site abre em `http://localhost:3000`. Use `pnpm` em todas as operações de pacote.

## Estrutura

```
src/
├── app/(public)/        # Páginas públicas; a home é dividida em seções em home/
├── components/
│   ├── layout/public/   # Cabeçalho, rodapé, contêiner, marca e textura de mármore
│   └── ui/              # Componentes shadcn/ui usados pelo site
├── providers/           # Tema
├── shared/utils/        # cn
└── styles/              # Tokens e tema
```

As imagens das telas do aplicativo ficam em `public/images/app/`.
