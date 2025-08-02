import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Sales, TechFlow Solutions",
      content: "Georgettestudios transformed our lead generation. We've seen a 3x increase in qualified leads and our sales cycle shortened by 40%. The AI scoring is incredibly accurate.",
      rating: 5,
      company: "TechFlow Solutions"
    },
    {
      name: "Marcus Rodriguez", 
      title: "Director of Marketing, DataCore Systems",
      content: "The ROI has been exceptional. Within 3 months, we generated over $2M in new pipeline. The integration with our CRM was seamless and the support team is outstanding.",
      rating: 5,
      company: "DataCore Systems"
    },
    {
      name: "Jennifer Wu",
      title: "Chief Revenue Officer, CloudTech Enterprises", 
      content: "Best investment we've made. The precision targeting helped us identify prospects we never would have found. Our conversion rate improved by 60% in the first quarter.",
      rating: 5,
      company: "CloudTech Enterprises"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Revenue Leaders
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how B2B companies are transforming their sales pipelines with our lead generation platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:shadow-secondary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/50 to-accent/30 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join 500+ Successful Companies?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start generating high-quality B2B leads today with our proven platform. 
              No setup fees, no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://salescentri.com/get-started/free-trial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground hover:shadow-primary hover:scale-105 font-semibold px-8 py-3 rounded-md transition-all duration-200"
              >
                Start Free Trial
              </a>
              <a 
                href="https://salescentri.com/get-started/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-md transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;