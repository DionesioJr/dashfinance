import { ArrowLeft, CheckCircle, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid min-h-svh w-full grid-cols-1 lg:grid-cols-2">
      {/* Lado esquerdo - Informativo */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-neutral-900 to-black p-12 text-white">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Descubra como o DashFinance pode transformar sua gestão financeira
          </h1>
          <p className="text-lg opacity-90">
            Agende uma apresentação personalizada e descubra como podemos ajudar sua empresa a alcançar seus objetivos
            financeiros.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-500" />
              <span>Análise financeira detalhada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-500" />
              <span>Consultoria especializada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-500" />
              <span>Estratégias personalizadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lado direito - Formulário */}
      <div className="flex items-center justify-center px-4 py-12 bg-neutral-50 dark:bg-neutral-900">
        <div className="w-full max-w-md space-y-8">
          <div className="absolute top-8 left-8 opacity-70">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-neutral-300 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:text-white  transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para início
            </Link>
          </div>

          <div className="text-center">
            <MessageCircleQuestion className="mx-auto h-12 w-12 text-neutral-800 dark:text-neutral-200 mb-4" />
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">Agende sua Apresentação</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Preencha o formulário e nosso consultor entrará em contato
            </p>
          </div>

          <form
            action="https://dashfinance.us22.list-manage.com/subscribe/post?u=f66d85f599ec2a9c86889310d&id=46e9b24d26&f_id=00aac2e1f0"
            method="post"
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="mce-FNAME"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  required
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-800 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="mce-LNAME"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Sobrenome
                </label>
                <input
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="mce-EMAIL"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-800 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="mce-PHONE"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Telefone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="PHONE"
                id="mce-PHONE"
                required
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-800 dark:text-white"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
              >
                Solicitar Apresentação
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
            Seus dados estão 100% seguros e protegidos
          </p>
        </div>
      </div>
    </div>
  );
}
