import { Link, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Link,
    title: "Paste the Article or URL",
    description: "Copy and paste the news article link or text you want to verify into our analyzer.",
  },
  {
    icon: Search,
    title: "AI Analyzes the Content",
    description: "Our advanced machine learning algorithms scan the content, sources, and patterns to detect misinformation.",
  },
  {
    icon: CheckCircle,
    title: "Get Credibility Results Instantly",
    description: "Receive a detailed credibility score with insights on source reliability and fact-checking.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to verify any news article in seconds
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-glow z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth h-full border border-border/50">
                <div className="mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
