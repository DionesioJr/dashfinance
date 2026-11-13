import Audience from "./home/audience";
import Faq from "./home/faq";
import FinalCta from "./home/final-cta";
import Fit from "./home/fit";
import Hero from "./home/hero";
import HowItWorks from "./home/how-it-works";
import Included from "./home/included";
import Pricing from "./home/pricing";
import Problem from "./home/problem";
import Screens from "./home/screens";

export default function Home() {
  return (
    <>
      <Hero />
      <Fit />
      <Problem />
      <HowItWorks />
      <Screens />
      <Included />
      <Audience />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
