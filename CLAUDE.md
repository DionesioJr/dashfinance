# CLAUDE.md

Guidance for Claude Code when working with this repository.

## sempre que recebir uma solicitação do usuario, deve verificar se esta bem explicada. caso Não esteja sem explicada deve perguntar no formato de questionario as duvidas em aberto, brechas que não foram explicadas.

## não use emojes, Não use emojes em nenhuma parte, nem em documentaçao nem em codigo.

## o uso de comentario deve ser sutil e apenas quando necessario/

## não use crie arquivos index.tsx ou index.ts

## nos texto para o usuario deve usar o portugues dop brasil com a ortografia brasileira e a gramatica brasileira

### Package Management
- Use `pnpm` for all package operations (not npm or yarn)
- nunca execute o build se não for uma solicitação do usuario
- os componentes como forms, tabelas, charts, cards, deve ser totalmente independetes e eles mesmo deve consultar as mitations e as queries se necessario. sendo assim deixando o componente independente.


### Tech Stack
- **Next.js 15.2.1** with App Router and TypeScript
- **React 19** with modern hooks patterns
- **Tailwind CSS 4.0** for styling
- **React Query (TanStack Query 5.67.3)** for server state
- **Zod 3.24.2** for validation with strict schema patterns
- **shadcn/ui** components with Radix UI primitives

## CRITICAL: Architecture First Approach

**BEFORE editing ANY file, you MUST:**

1. **Read architecture**: `@docs/guidelines/nextjs_architecture.md`
2. **Check guideline for file type**: `@docs/README.md` and specific guidelines:
   - API files: `@docs/guidelines/api.md`
   - Services: `@docs/guidelines/service.md`
   - Types: `@docs/guidelines/types.md`
   - Schemas: `@docs/guidelines/validation_schema.md`
   - Queries: `@docs/guidelines/queries.md`
   - Mutations: `@docs/guidelines/mutation.md`
   - Forms: `@docs/guidelines/forms.md`
   - Modals: `@docs/guidelines/modal_dialog.md`

3. **Follow domain patterns**: Each domain follows DDD structure:
   ```
   src/domains/[domain]/
   ├── [domain].api.ts
   ├── [domain].type.ts
   ├── [domain].schema.ts
   ├── [domain].service.ts
   ├── [domain].queries.ts
   ├── [domain].mutations.ts
   └── components/
   ```

## Essential Rules

- **No emojis** anywhere (code, docs, comments)
- **Use pnpm** for package management
- **Always use guidelines** before creating/editing files
- **Consistent naming** across all domains
- **JSDoc comments** on all functions
- **"use client"** directive where required

## Tech Stack

- Next.js 15.2.1 + App Router
- React 19
- TypeScript
- TanStack Query 5.67.3
- Zod 3.24.2
- Tailwind CSS 4.0
- shadcn/ui

