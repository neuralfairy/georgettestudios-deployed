import { Target, Zap, BarChart3, Users, Shield, Workflow } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision Targeting",
      description: "Advanced B2B filters to identify your ideal prospects with laser accuracy."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI Lead Scoring", 
      description: "Machine learning algorithms score prospects based on conversion probability."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Pipeline Analytics",
      description: "Real-time dashboard with conversion metrics and ROI tracking."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Multi-Channel Outreach",
      description: "Coordinate email, LinkedIn, and phone campaigns from one platform."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "GDPR Compliant",
      description: "Enterprise-grade security with full GDPR and ISO compliance."
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "CRM Integration",
      description: "Seamless sync with HubSpot, Salesforce, Pipedrive, and 50+ tools."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Scale Your Pipeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive lead generation platform combines AI-powered insights with proven B2B strategies to deliver consistent, high-quality results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;