import { PreorderProvider } from "@/components/Preorder";
import { Benefits } from "@/components/sections/Benefits";
import { BrandStory } from "@/components/sections/BrandStory";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowToUse } from "@/components/sections/HowToUse";
import { Marquee } from "@/components/sections/Marquee";
import { Metrics } from "@/components/sections/Metrics";
import { Footer, Header } from "@/components/sections/SiteChrome";
import { Testimonials } from "@/components/sections/Testimonials";
import { UseCases } from "@/components/sections/UseCases";

export default function Home() {
  const paymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? "";

  return (
    <PreorderProvider paymentLink={paymentLink}>
      <main className="grid-paper relative w-full overflow-x-hidden">
        <Header />
        <Hero />
        <Marquee />
        <Benefits />
        <Testimonials />
        <HowToUse />
        <UseCases />
        <Metrics />
        <BrandStory />
        <FinalCta />
        <Footer />
      </main>
    </PreorderProvider>
  );
}
