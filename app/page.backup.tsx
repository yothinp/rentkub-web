import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <Features />
        <Categories />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
