import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "Up to 1,000 leads per month",
        "Basic email sequences",
        "CRM integration",
        "Email support",
        "Lead scoring",
      ],
      limitations: [
        "Advanced AI features",
        "Phone & LinkedIn outreach",
        "Team collaboration",
        "Custom integrations"
      ]
    },
    {
      name: "Professional", 
      description: "Most popular for growing companies",
      monthlyPrice: 149,
      yearlyPrice: 119,
      popular: true,
      features: [
        "Up to 5,000 leads per month",
        "Multi-channel outreach",
        "Advanced AI scoring",
        "Team collaboration",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "A/B testing"
      ],
      limitations: [
        "White-label options",
        "Dedicated success manager"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 399,
      yearlyPrice: 319,
      features: [
        "Unlimited leads",
        "All Professional features",
        "White-label options",
        "Dedicated success manager",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
        "Training & onboarding"
      ],
      limitations: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. Start free, upgrade when you're ready. 
            No setup fees, cancel anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly <span className="text-primary font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-card rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-primary shadow-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-primary font-medium">
                      Billed annually (${(isYearly ? plan.yearlyPrice : plan.monthlyPrice) * 12})
                    </p>
                  )}
                </div>

                <Button 
                  variant={plan.popular ? "cta" : "outline-primary"}
                  className="w-full mb-8"
                  asChild
                >
                  <a 
                    href="https://salescentri.com/get-started/free-trial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-3">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-center space-x-3">
                            <X className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Calculate Your ROI
          </h2>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Monthly Lead Goal
                </label>
                <input 
                  type="number" 
                  defaultValue="100"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Conversion Rate (%)
                </label>
                <input 
                  type="number" 
                  defaultValue="15"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Average Deal Size ($)
                </label>
                <input 
                  type="number" 
                  defaultValue="5000"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Projected Monthly Revenue</h3>
              <p className="text-3xl font-bold text-primary">$75,000</p>
              <p className="text-sm text-muted-foreground mt-2">
                With our average 3x improvement in lead quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Can I change plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 14-day free trial with full access to Professional features. No credit card required to start."
              },
              {
                question: "What's included in setup and onboarding?",
                answer: "All plans include basic setup assistance. Professional and Enterprise plans include dedicated onboarding sessions and training."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;