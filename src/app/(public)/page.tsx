import About from "./home/about";
import Contact from "./home/contact";
import Hero from "./home/hero";
import Features from "./home/features";
import ConsultantBenefits from "./home/consultant-benefits";
import Testimonials from "./home/testimonials";
import CTA from "./home/cta";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-white dark:bg-black relative transition-colors duration-300">
        {/* Efeitos visuais premium */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Gradientes de fundo */}
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100/60 dark:bg-primary/10 blur-[100px]"></div>
          <div className="absolute top-[30%] -left-[5%] w-[30%] h-[30%] rounded-full bg-emerald-100/60 dark:bg-emerald-900/10 blur-[100px]"></div>
          <div className="absolute -bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 dark:bg-blue-900/10 blur-[100px]"></div>

          {/* Grade similar ao Raycast */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

          {/* Chips flutuantes como decoração */}
          <div className="absolute top-[15%] right-[20%] opacity-50 sm:block hidden">
            <div className="px-2 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-300 rounded-full text-xs font-medium transition-colors duration-300">
              Premium
            </div>
          </div>
          <div className="absolute bottom-[25%] left-[15%] opacity-50 sm:block hidden">
            <div className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-medium transition-colors duration-300">
              Finanças
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Features Section */}
          <Features />

          {/* Consultant Benefits Section */}
          <ConsultantBenefits />

          {/* About Section */}
          <About />

          {/* Pricing Section */}
          {/* <Pricing /> */}

          {/* Testimonials Section */}
          <Testimonials />

          {/* CTA Section */}
          <CTA />

          {/* Contact Section */}
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}
