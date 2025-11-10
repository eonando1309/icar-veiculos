import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroShowroom from "@/assets/hero-showroom.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroShowroom} 
          alt="Showroom ICAR" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep/80 via-black-deep/70 to-black-deep"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Encontre Seu{" "}
          <span className="text-primary animate-pulse-glow inline-block">
            Carro dos Sonhos
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up">
          Os melhores veículos seminovos e usados de Guarulhos e região. 
          <span className="block mt-2 text-primary font-semibold">
            Qualidade, confiança e o melhor atendimento!
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow group"
            onClick={() => scrollToSection("veiculos")}
          >
            Ver Veículos
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open("tel:+5511941898080", "_self")}
          >
            <Phone className="mr-2 h-6 w-6" />
            Fale Conosco
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
