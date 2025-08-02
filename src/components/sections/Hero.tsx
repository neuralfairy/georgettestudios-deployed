import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> B2B Lead Generation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Generate high-quality leads, score prospects intelligently, and accelerate your sales pipeline with our proven B2B lead generation platform.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "3x More Qualified Leads",
                "85% Faster Sales Cycles", 
                "AI-Powered Prospect Scoring"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="cta" className="group" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline-primary" className="group" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 500+ B2B companies</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-xs font-semibold text-muted-foreground">SALESCENTRI</div>
                <div className="text-xs font-semibold text-muted-foreground">HUBSPOT</div>
                <div className="text-xs font-semibold text-muted-foreground">PIPEDRIVE</div>
                <div className="text-xs font-semibold text-muted-foreground">SALESFORCE</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroDashboard}
                alt="Lead Generation Dashboard - B2B Sales Pipeline Analytics"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border animate-pulse-slow">
              <div className="text-2xl font-bold text-primary">+247%</div>
              <div className="text-sm text-muted-foreground">Lead Quality</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border animate-pulse-slow">
              <div className="text-2xl font-bold text-secondary">$2.4M</div>
              <div className="text-sm text-muted-foreground">Pipeline Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;