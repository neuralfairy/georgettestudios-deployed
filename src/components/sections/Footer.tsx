import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">Georgettestudios</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Transforming B2B lead generation with AI-powered insights and proven strategies. 
              Trusted by 500+ companies worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Reno, Nevada, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (775) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@georgettestudios.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="https://salescentri.com/platforms/lead-management/lead-generation" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Lead Generation</a></li>
              <li><a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">AI Scoring</a></li>
              <li><a href="https://salescentri.com/solutions/psa-suite/integrations" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">CRM Integration</a></li>
              <li><a href="https://salescentri.com/solutions/psa-suite/features" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://salescentri.com/company/about-us" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="https://salescentri.com/company/careers" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="https://salescentri.com/company/partners-affiliates" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Contact</a></li>
              <li><a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Support</a></li>
              <li><a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Live Chat</a></li>
              <li><a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal */}
            <div className="flex items-center space-x-6 text-sm text-secondary-foreground/80">
              <span>© {currentYear} Georgettestudios Solutions. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-secondary-foreground transition-colors">Terms of Service</Link>
            </div>

            {/* Social & Powered By */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="text-sm text-secondary-foreground/60">
                Powered by{" "}
                <a 
                  href="https://salescentri.com/?utm_source=georgettestudios.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  Sales Intelligence Platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;