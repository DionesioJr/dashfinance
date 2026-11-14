import { Check, ChevronRight } from "lucide-react";

import { MarbleBackground } from "@/components/layout/public/marble-background";
import { Input } from "@/components/ui/input";

const MAILCHIMP_ACTION =
  "https://dashfinance.us22.list-manage.com/subscribe/post?u=f66d85f599ec2a9c86889310d&id=46e9b24d26&f_id=00aac2e1f0";

const BENEFITS = ["Análise financeira detalhada", "Consultoria especializada", "Estratégias personalizadas"];

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-overline uppercase text-ink-500">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-svh flex-wrap pt-16">
      <section className="relative flex min-h-[420px] flex-[3_1_560px] flex-col justify-end overflow-hidden bg-surface-inverse text-on-inverse">
        <MarbleBackground id="demo-marmore" />
        <div className="relative px-6 pt-16 pb-12 sm:px-14 md:pb-14">
          <p className="text-overline uppercase text-on-inverse-muted">Demonstração</p>
          <h1 className="mt-5 max-w-[640px] font-display text-display-md text-balance md:text-[56px] md:leading-[62px]">
            Descubra como o DashFinance pode transformar sua gestão financeira
          </h1>
          <p className="mt-5 max-w-[420px] text-body text-on-inverse-muted">
            Agende uma apresentação personalizada e descubra como podemos ajudar sua empresa a alcançar seus objetivos
            financeiros.
          </p>
          <ul className="mt-10 max-w-[480px] border-t border-on-inverse/15">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-center gap-4 border-b border-on-inverse/15 py-4 text-body-sm">
                <Check className="size-[18px] shrink-0" strokeWidth={1.5} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-[2_1_460px] flex-col bg-surface-base">
        <form action={MAILCHIMP_ACTION} method="post" className="flex flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-[440px] flex-1 flex-col justify-center gap-9 px-6 py-12 sm:px-0">
            <div>
              <h2 className="font-display text-display-md text-ink-900 md:text-display-lg">Agende sua apresentação</h2>
              <p className="mt-3 text-body text-ink-600">Preencha o formulário e nosso consultor entrará em contato.</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="mce-FNAME" label="Nome">
                  <Input type="text" name="FNAME" id="mce-FNAME" autoComplete="given-name" required />
                </Field>
                <Field id="mce-LNAME" label="Sobrenome (opcional)">
                  <Input type="text" name="LNAME" id="mce-LNAME" autoComplete="family-name" />
                </Field>
              </div>
              <Field id="mce-EMAIL" label="E-mail">
                <Input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  autoComplete="email"
                  placeholder="voce@consultoria.com.br"
                  required
                />
              </Field>
              <Field id="mce-PHONE" label="Telefone">
                <Input
                  type="tel"
                  name="PHONE"
                  id="mce-PHONE"
                  autoComplete="tel"
                  placeholder="(00) 00000-0000"
                  required
                />
              </Field>
            </div>

            <p className="text-caption text-ink-600">Seus dados estão 100% seguros e protegidos.</p>
          </div>

          <button
            type="submit"
            className="focus-ring flex h-[76px] w-full cursor-pointer items-center justify-center gap-2.5 bg-primary text-button-lg uppercase text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Solicitar apresentação
            <ChevronRight className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
          </button>
        </form>
      </section>
    </div>
  );
}
