import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import About from "@/components/About";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <About />
      <Demo />
      <Footer />
    </div>
  );
};

export default Index;
