import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcar from "@/assets/logo-icar.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img 
            src={logoIcar} 
            alt="ICAR Veículos" 
            className="h-12 w-auto animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("veiculos")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Veículos
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-pulse-glow"
              onClick={() => window.open("tel:+5511941898080", "_self")}
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 94189-8080
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("veiculos")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Veículos
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Contato
              </button>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
                onClick={() => window.open("tel:+5511941898080", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                (11) 94189-8080
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
