import { Brain, Shield, Zap, Database, Lock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Real-time NLP Analysis",
    description: "Advanced natural language processing algorithms analyze content patterns, sentiment, and linguistic markers instantly.",
  },
  {
    icon: Shield,
    title: "Source Credibility Scoring",
    description: "Comprehensive evaluation of news sources based on historical accuracy, bias detection, and journalistic standards.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get detailed credibility reports in seconds, not hours. Lightning-fast processing for immediate fact-checking.",
  },
  {
    icon: Database,
    title: "Vast Knowledge Base",
    description: "Trained on millions of verified articles and fact-checked content to ensure accurate detection.",
  },
  {
    icon: Lock,
    title: "Data Privacy & Security",
    description: "Your queries are never stored or shared. We prioritize your privacy with end-to-end encryption.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Our AI model constantly improves by learning from new misinformation patterns and fact-checking updates.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI technology to combat misinformation with precision and speed
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth border border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-smooth">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
