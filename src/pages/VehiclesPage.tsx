import { Header } from "@/components/Header";
import { Vehicles } from "@/components/Vehicles";
import { Footer } from "@/components/Footer";
import { ScheduleDialog } from "@/components/ScheduleDialog";
import { UrgencyBanner } from "@/components/UrgencyBanner";

const VehiclesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <UrgencyBanner />
      <main className="pt-20">
        {/* Hero Section for Vehicles Page */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shine"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-primary/20 border border-primary text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-glow-pulse">
              🚗 Nosso Estoque
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
              Veículos <span className="text-primary drop-shadow-[0_0_30px_rgba(255,85,0,0.5)]">Disponíveis</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Seminovos e usados com qualidade garantida e os melhores preços de Guarulhos
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <span className="text-sm font-semibold text-foreground">✓ Inspeção Completa</span>
              </div>
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <span className="text-sm font-semibold text-foreground">✓ Garantia Inclusa</span>
              </div>
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                <span className="text-sm font-semibold text-foreground">✓ Financiamento Facilitado</span>
              </div>
            </div>
          </div>
        </section>

        <Vehicles />

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary rounded-2xl p-12 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shine"></div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 relative z-10">
                Não Encontrou o Que Procura?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 relative z-10">
                Entre em contato conosco! Temos acesso a centenas de veículos e podemos encontrar exatamente o que você precisa.
              </p>
              <ScheduleDialog />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Schedule Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
        <ScheduleDialog variant="floating" />
      </div>
    </div>
  );
};

export default VehiclesPage;
