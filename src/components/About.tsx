import { Target, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-secondary/30" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              About Our Mission
            </h2>
            <p className="text-xl text-muted-foreground">
              Fighting misinformation with cutting-edge AI technology
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-card border border-border/50 mb-12">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              In an era where misinformation spreads faster than truth, the Fake News Detector was created 
              to empower individuals with the tools to verify information quickly and accurately. Using 
              state-of-the-art natural language processing and machine learning algorithms, we analyze news 
              articles, social media posts, and online content to detect patterns of misinformation.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our mission is to promote media literacy, support fact-checking, and contribute to a more 
              informed digital society. By making verification accessible to everyone, we're helping build 
              a world where truth prevails over deception.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Our Goal</h3>
              <p className="text-sm text-muted-foreground">
                Combat misinformation through accessible AI technology
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Our Team</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated researchers and AI specialists
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Our Impact</h3>
              <p className="text-sm text-muted-foreground">
                Building a more informed global community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
