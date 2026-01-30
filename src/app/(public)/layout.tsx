import "@/styles/globals.css";
import { Footer } from "../../components/layout/public/footer";
import { Header } from "../../components/layout/public/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
