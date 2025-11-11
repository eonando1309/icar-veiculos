import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoIcar from "@/assets/logo-icar.png";
import { NavLink } from "@/components/NavLink";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Início" },
    { to: "/veiculos", label: "Veículos" },
    { to: "/beneficios", label: "Por Que ICAR?" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-deep/95 backdrop-blur-lg border-b border-primary/20 shadow-[0_10px_30px_rgba(255,85,0,0.2)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img src={logoIcar} alt="ICAR - Veículos Seminovos Guarulhos" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-lg relative group px-4 py-2 rounded-lg hover:bg-black-soft/50 backdrop-blur-sm"
                activeClassName="text-primary bg-primary/10"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary group-hover:opacity-100 opacity-0 transition-all duration-300"></span>
              </NavLink>
            ))}
            
            {/* CTA Button */}
            <a
              href="tel:+5511941898080"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(255,85,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,85,0,0.5)] animate-glow-pulse"
            >
              📞 (11) 94189-8080
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-primary/20 animate-fade-in">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold text-lg px-4 rounded-lg"
                activeClassName="text-primary bg-primary/5"
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="tel:+5511941898080"
              className="block w-full text-center mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              📞 Ligar Agora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
