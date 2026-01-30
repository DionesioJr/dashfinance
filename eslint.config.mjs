import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const compat = new FlatCompat();

export default [
  ...compat.extends("next", "next/core-web-vitals", "plugin:@typescript-eslint/recommended"),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Desabilita a verificação de 'any'
      "@typescript-eslint/explicit-module-boundary-types": "off", // Desabilita a verificação de tipos de retorno
      "react-hooks/exhaustive-deps": "off", // Avisa sobre dependências não verificadas no useEffect
      "react/no-unescaped-entities": "off", // Desabilita a verificação de entidades não escapadas
      "no-console": "off", // Avisa sobre o uso de console.log
      "no-unused-vars": "off", // Desabilita a regra padrão (será substituída pela do plugin)
      "@typescript-eslint/no-unused-vars": "off", // Desabilita a regra do TypeScript (será substituída pela do plugin)

      // Regras para detectar componentes e importações não utilizados
      "unused-imports/no-unused-imports": "error", // Remove automaticamente importações não utilizadas
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Limita o tamanho de arquivos para manter a manutenibilidade
      "max-lines": [
        "warn",
        {
          max: 2000,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      // Regras para detectar problemas com importações - ativadas
      "import/default": "error", // Verifica se importações default existem
      // "import/named": "error", // Verifica se importações nomeadas existem no módulo exportado
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^[^./]"], // Ignora módulos de node_modules (não começam com ./ ou /)
        },
      ],
      // "import/no-duplicates": "error", // Evita importações duplicadas
      //"import/namespace": "error", // Verifica se propriedades de namespace existem

      // Ordem das importações - ativada para melhor organização
      "import/order": [
        "off",
        {
          groups: [
            ["builtin", "external"], // Core e dependências externas primeiro
            ["internal"], // Importações internas do sistema e do projeto
            ["parent", "sibling", "index"], // Importações do projeto
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true, // Sempre tenta resolver @types
          project: "./tsconfig.json", // Usa o tsconfig.json do projeto
        },
        node: {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      },
    },
  },
];
