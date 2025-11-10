import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Action Section */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                  Comece Sua <span className="text-primary drop-shadow-[0_0_20px_rgba(255,85,0,0.5)]">Jornada</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Explore nosso estoque, conheça nossos diferenciais ou entre em contato
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <a 
                  href="/veiculos"
                  className="group bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 hover:border-primary rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,85,0,0.3)] hover:-translate-y-3 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">🚗</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      Ver Veículos
                    </h3>
                    <p className="text-muted-foreground">
                      Confira nosso estoque completo de seminovos selecionados
                    </p>
                  </div>
                </a>

                <a 
                  href="/beneficios"
                  className="group bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 hover:border-primary rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,85,0,0.3)] hover:-translate-y-3 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">⭐</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      Nossos Diferenciais
                    </h3>
                    <p className="text-muted-foreground">
                      Descubra por que somos referência em Guarulhos
                    </p>
                  </div>
                </a>

                <a 
                  href="/contato"
                  className="group bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 hover:border-primary rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,85,0,0.3)] hover:-translate-y-3 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">📞</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      Fale Conosco
                    </h3>
                    <p className="text-muted-foreground">
                      Entre em contato e tire todas as suas dúvidas
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
          <Button
            size="lg"
            className="relative rounded-full w-20 h-20 bg-primary hover:bg-primary/90 shadow-[0_20px_60px_rgba(255,85,0,0.6)] hover:shadow-[0_25px_70px_rgba(255,85,0,0.8)] transition-all duration-300 hover:scale-110 animate-glow-pulse"
            onClick={() => window.open("https://wa.me/5511941898080", "_blank")}
          >
            <Phone className="h-10 w-10" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
