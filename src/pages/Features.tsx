import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Target, Brain, BarChart3, Users, Shield, Workflow, Zap, Filter, Mail, Phone, MessageSquare, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      category: "Lead Discovery",
      items: [
        {
          icon: <Target className="w-6 h-6 text-primary" />,
          title: "Advanced B2B Filters",
          description: "Target prospects by industry, company size, technology stack, revenue, and 50+ other criteria."
        },
        {
          icon: <Filter className="w-6 h-6 text-primary" />,
          title: "Intent Data Signals",
          description: "Identify companies actively researching solutions like yours using behavioral intent data."
        },
        {
          icon: <Database className="w-6 h-6 text-primary" />,
          title: "Contact Enrichment",
          description: "Automatically find verified email addresses and phone numbers for your target prospects."
        }
      ]
    },
    {
      category: "AI-Powered Intelligence",
      items: [
        {
          icon: <Brain className="w-6 h-6 text-primary" />,
          title: "Predictive Lead Scoring",
          description: "ML algorithms analyze 200+ data points to predict conversion likelihood with 89% accuracy."
        },
        {
          icon: <Zap className="w-6 h-6 text-primary" />,
          title: "Lookalike Modeling",
          description: "Find prospects similar to your best customers using advanced pattern recognition."
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-primary" />,
          title: "Pipeline Forecasting",
          description: "Predict monthly revenue with confidence intervals based on historical performance."
        }
      ]
    },
    {
      category: "Multi-Channel Outreach",
      items: [
        {
          icon: <Mail className="w-6 h-6 text-primary" />,
          title: "Email Sequences",
          description: "Automated email campaigns with A/B testing, deliverability optimization, and reply detection."
        },
        {
          icon: <MessageSquare className="w-6 h-6 text-primary" />,
          title: "LinkedIn Automation",
          description: "Personalized connection requests and follow-up messages at scale while staying compliant."
        },
        {
          icon: <Phone className="w-6 h-6 text-primary" />,
          title: "Cold Calling Tools",
          description: "Integrated dialer with call scripts, recording, and automatic activity logging."
        }
      ]
    },
    {
      category: "Platform & Security",
      items: [
        {
          icon: <Workflow className="w-6 h-6 text-primary" />,
          title: "CRM Integration",
          description: "Bi-directional sync with HubSpot, Salesforce, Pipedrive, and 50+ popular CRMs."
        },
        {
          icon: <Shield className="w-6 h-6 text-primary" />,
          title: "Enterprise Security",
          description: "GDPR compliant, SOC 2 Type II certified, with enterprise-grade data encryption."
        },
        {
          icon: <Users className="w-6 h-6 text-primary" />,
          title: "Team Collaboration",
          description: "Role-based access control, shared templates, and team performance analytics."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> B2B Lead Generation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our comprehensive platform combines AI-powered insights, multi-channel outreach, and seamless integrations 
            to help you generate more qualified leads and accelerate your sales cycle.
          </p>
          <div className="text-center">
            <a 
              href="https://salescentri.com/solutions/use-case-navigator/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground hover:shadow-primary hover:scale-105 font-semibold px-8 py-3 rounded-md transition-all duration-200"
            >
              Explore Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-card p-8 rounded-xl border border-border hover:shadow-primary transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Integrates with Your Existing Stack
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect seamlessly with the tools you already use. No disruption to your workflow.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {["HubSpot", "Salesforce", "Pipedrive", "Intercom", "Slack", "Zapier", "Mailchimp", "LinkedIn", "Outreach", "SalesLoft", "Calendly", "Zoom"].map((integration, index) => (
              <div key={index} className="text-sm font-semibold text-muted-foreground hover:opacity-100 transition-opacity">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;