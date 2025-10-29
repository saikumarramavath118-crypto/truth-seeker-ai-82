import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [newsUrl, setNewsUrl] = useState("");

  const handleAnalyze = () => {
    if (newsUrl.trim()) {
      // Navigate to demo section
      const demoSection = document.getElementById("demo");
      demoSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Detect Fake News Instantly with AI
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Harness the power of machine learning to verify the authenticity of online news in seconds. 
            Get instant credibility scores and protect yourself from misinformation.
          </p>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="Paste article URL or text to analyze..."
                value={newsUrl}
                onChange={(e) => setNewsUrl(e.target.value)}
                className="flex-1 h-14 text-lg bg-card shadow-card border-border/50 focus:border-primary transition-smooth"
                onKeyPress={(e) => e.key === "Enter" && handleAnalyze()}
              />
              <Button 
                onClick={handleAnalyze}
                size="lg"
                className="h-14 px-8 gradient-primary hover:shadow-glow transition-smooth text-lg font-semibold"
              >
                <Search className="mr-2 h-5 w-5" />
                Analyze Now
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            No signup required • Free to use • Instant results
          </p>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
