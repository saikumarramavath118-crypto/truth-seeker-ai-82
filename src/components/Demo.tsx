import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

const Demo = () => {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    credibility: number;
    status: "verified" | "suspicious" | "fake";
  }>(null);

  const analyzeContent = () => {
    const content = url || text;
    if (!content.trim()) {
      toast.error("Please enter a URL or text to analyze");
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI analysis
    setTimeout(() => {
      // Random credibility score for demo
      const credibility = Math.floor(Math.random() * 100);
      let status: "verified" | "suspicious" | "fake";
      
      if (credibility >= 70) status = "verified";
      else if (credibility >= 40) status = "suspicious";
      else status = "fake";

      setResult({ credibility, status });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "text-green-600";
      case "suspicious": return "text-yellow-600";
      case "fake": return "text-red-600";
      default: return "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified": return <CheckCircle2 className="h-16 w-16 text-green-600" />;
      case "suspicious": return <AlertCircle className="h-16 w-16 text-yellow-600" />;
      case "fake": return <XCircle className="h-16 w-16 text-red-600" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-background" id="demo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Try It Now
            </h2>
            <p className="text-xl text-muted-foreground">
              Test our AI-powered detector with any news article or text
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <Tabs defaultValue="url" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="url">URL Analysis</TabsTrigger>
                <TabsTrigger value="text">Text Analysis</TabsTrigger>
              </TabsList>
              
              <TabsContent value="url">
                <div className="space-y-4">
                  <Input
                    type="url"
                    placeholder="https://example.com/news-article"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-12"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="text">
                <Textarea
                  placeholder="Paste the news article text here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
              </TabsContent>
            </Tabs>

            <Button
              onClick={analyzeContent}
              disabled={isAnalyzing}
              className="w-full mt-6 h-12 gradient-primary hover:shadow-glow transition-smooth text-lg font-semibold"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Content"}
            </Button>

            {result && (
              <div className="mt-8 p-6 bg-secondary/30 rounded-xl border border-border/50">
                <div className="text-center mb-4">
                  {getStatusIcon(result.status)}
                </div>
                
                <h3 className={`text-2xl font-bold text-center mb-4 ${getStatusColor(result.status)}`}>
                  {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                </h3>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Credibility Score</span>
                    <span className="text-sm font-bold">{result.credibility}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="h-3 rounded-full gradient-primary transition-all duration-1000"
                      style={{ width: `${result.credibility}%` }}
                    />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  {result.status === "verified" && "This content appears to be from a credible source."}
                  {result.status === "suspicious" && "This content shows some questionable patterns. Verify with additional sources."}
                  {result.status === "fake" && "This content contains multiple red flags associated with misinformation."}
                </p>
              </div>
            )}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Note: This is a demonstration. For production use, results would be based on comprehensive AI analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
