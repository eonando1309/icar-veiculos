import { Header } from "@/components/Header";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { Phone, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section for Benefits Page */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shine"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-primary/20 border border-primary text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-glow-pulse">
              ⭐ Nossos Diferenciais
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
              Por Que Escolher a <span className="text-primary drop-shadow-[0_0_30px_rgba(255,85,0,0.5)]">ICAR?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Mais de 10 anos transformando sonhos em realidade com excelência e compromisso
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/30">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Garantia Total</span>
              </div>
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/30">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Qualidade Certificada</span>
              </div>
            </div>
          </div>
        </section>

        <Benefits />

        {/* Trust & Credibility Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                  Compromisso com a <span className="text-primary">Excelência</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Na ICAR, cada cliente é único e recebe um atendimento personalizado
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,85,0,0.3)]">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    Nossa Missão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Proporcionar a melhor experiência na compra de veículos seminovos, 
                    com transparência, qualidade e preços justos. Seu sonho é nossa missão!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,85,0,0.3)]">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    Nossa Garantia
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Todos os nossos veículos passam por rigorosa inspeção técnica e mecânica. 
                    Garantimos procedência, documentação em dia e total suporte pós-venda.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary rounded-2xl p-12 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shine"></div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 relative z-10">
                  Pronto Para Realizar Seu Sonho?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 relative z-10">
                  Visite nossa loja em Guarulhos ou fale conosco agora mesmo!
                </p>
                <Button 
                  size="lg"
                  className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-[0_20px_60px_rgba(255,85,0,0.4)] hover:shadow-[0_25px_70px_rgba(255,85,0,0.6)] transition-all duration-300 hover:scale-110 overflow-hidden z-10"
                  onClick={() => window.open("https://wa.me/5511941898080", "_blank")}
                >
                  <span className="relative z-10 flex items-center">
                    <Phone className="mr-2 h-6 w-6 animate-bounce-slow" />
                    Entre em Contato Agora
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
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

export default BenefitsPage;
