import { Instagram, Phone, MapPin } from "lucide-react";
import logoIcar from "@/assets/logo-icar.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="animate-fade-in">
            <img 
              src={logoIcar} 
              alt="ICAR Veículos" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground leading-relaxed">
              Os melhores veículos seminovos e usados de Guarulhos e região. 
              Qualidade, confiança e atendimento excepcional.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-bold mb-4 text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById("veiculos")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Veículos em Destaque
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Nossos Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+5511941898080" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    (11) 94189-8080
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  Av. Salgado Filho, 1586<br />
                  Guarulhos/SP
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.instagram.com/icar_veiculosbr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    @icar_veiculosbr
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} ICAR Veículos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
