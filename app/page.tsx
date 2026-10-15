import { PreorderProvider } from "@/components/Preorder";
import { StickerRail } from "@/components/StickerRail";
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
      <StickerRail />
      <main className="grid-paper relative mx-auto max-w-[1180px] overflow-hidden shadow-[0_0_40px_rgb(0_0_0/0.12)] lg:w-[84vw]">
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
