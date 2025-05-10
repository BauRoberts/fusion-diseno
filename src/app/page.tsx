import Benefits from "@/components/benefits";
import DesignShowcase from "@/components/design-showcase";
import FAQ from "@/components/faq";
import FeaturedWork from "@/components/featured-work";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedWork />
      <section id="design-showcase">
        <DesignShowcase />
      </section>
      <Footer />
    </main>
  );
}
