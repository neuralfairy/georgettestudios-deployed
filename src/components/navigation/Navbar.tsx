import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "https://salescentri.com/solutions/psa-suite/features" },
    { name: "Pricing", href: "https://salescentri.com/pricing" },
    { name: "About", href: "https://salescentri.com/company/about-us" },
    { name: "Contact", href: "#footer", isScroll: true },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-foreground">Georgettestudios</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isScroll ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="https://salescentri.com/login/customer-portal" target="_blank" rel="noopener noreferrer">Sign In</a>
            </Button>
            <Button variant="cta" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">Start Free Trial</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              item.isScroll ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <a href="https://salescentri.com/login/customer-portal" target="_blank" rel="noopener noreferrer">Sign In</a>
              </Button>
              <Button variant="cta" className="w-full" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">Start Free Trial</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;