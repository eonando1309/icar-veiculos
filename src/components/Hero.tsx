import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Award, CheckCircle } from "lucide-react";
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
          alt="Showroom ICAR com os melhores veículos seminovos de Guarulhos" 
          className="w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep/90 via-black-deep/80 to-black-deep"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"></div>
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shine"></div>
      </div>

      {/* Trust Badges - Top */}
      <div className="absolute top-24 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Garantia Inclusa</span>
            </div>
            <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">+10 Anos no Mercado</span>
            </div>
            <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Documentação Verificada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <div className="mb-4 animate-fade-in">
          <span className="inline-block bg-primary/20 border border-primary text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-glow-pulse">
            🔥 Melhores Ofertas de Guarulhos
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in leading-tight px-4 md:px-8 py-6 md:py-8 rounded-2xl bg-black-deep/85 backdrop-blur-md border border-primary/30 shadow-[0_0_60px_rgba(255,85,0,0.3)]" style={{ animationDelay: "100ms" }}>
          Encontre Seu{" "}
          <span className="text-primary animate-glow-pulse inline-block drop-shadow-[0_0_30px_rgba(255,85,0,0.5)]">
            Carro dos Sonhos
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/95 mb-4 max-w-4xl mx-auto animate-slide-up font-medium px-6 md:px-10 py-4 md:py-6 rounded-2xl bg-black-deep/80 backdrop-blur-md border border-primary/20 shadow-[0_0_40px_rgba(255,85,0,0.2)]" style={{ animationDelay: "200ms" }}>
          Os melhores veículos seminovos e usados de Guarulhos e região
        </p>
        
        <p className="text-lg md:text-xl text-primary font-bold mb-12 animate-slide-up max-w-3xl mx-auto px-6 md:px-10 py-4 md:py-5 rounded-xl bg-black-deep/75 backdrop-blur-sm border border-primary/30 shadow-[0_0_30px_rgba(255,85,0,0.25)]" style={{ animationDelay: "300ms" }}>
          ✓ Inspeção Rigorosa  ✓ Preços Competitivos  ✓ Financiamento Facilitado
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in mb-16" style={{ animationDelay: "400ms" }}>
          <Button 
            size="lg"
            className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-[0_20px_60px_rgba(255,85,0,0.4)] hover:shadow-[0_25px_70px_rgba(255,85,0,0.6)] transition-all duration-300 hover:scale-110 animate-glow-pulse group overflow-hidden"
            onClick={() => scrollToSection("veiculos")}
          >
            <span className="relative z-10 flex items-center">
              Ver Veículos Disponíveis
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_60px_rgba(255,85,0,0.4)] backdrop-blur-sm"
            onClick={() => window.open("tel:+5511941898080", "_self")}
          >
            <Phone className="mr-2 h-6 w-6 animate-bounce-slow" />
            Ligue Agora: (11) 94189-8080
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="bg-black-soft/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Veículos Vendidos</div>
          </div>
          <div className="bg-black-soft/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Anos no Mercado</div>
          </div>
          <div className="bg-black-soft/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="bg-black-soft/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Resposta Rápida</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2 shadow-[0_0_20px_rgba(255,85,0,0.5)]">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
