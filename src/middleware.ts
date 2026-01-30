import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

/**
 * Middleware placeholder - autenticação é 100% client-side com localStorage
 * Todas as rotas são permitidas. Proteção de rotas é feita no AuthProvider (client-side).
 */
 
export function middleware(_: NextRequest) {
  // Permite todas as requisições sem fazer nada
  return NextResponse.next();
}

// Configuração do middleware para aplicar em todas as rotas, exceto arquivos estáticos
export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Aplica o middleware em todas as rotas, exceto:
     * - API routes (api/*)
     * - Arquivos estáticos (_next/static/*)
     * - Imagens otimizadas (_next/image/*)
     * - Arquivos de metadata (favicon.ico, sitemap.xml, robots.txt)
     * - Arquivos da pasta public (public/*)
     * - Arquivos SVG (.svg)
     * - Arquivos de imagem (.jpg, .png, .gif)
     * - Arquivos CSS (.css)
     * - Arquivos JavaScript (.js)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|public/|.*.svg$|.*.jpg$|.*.png$|.*.gif$|.*.css$|.*.js$).*)",
  ],
};
