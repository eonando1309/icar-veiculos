import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section for Contact Page */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shine"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block bg-primary/20 border border-primary text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-glow-pulse">
              📞 Fale Conosco
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
              Entre em <span className="text-primary drop-shadow-[0_0_30px_rgba(255,85,0,0.5)]">Contato</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Estamos prontos para atendê-lo! Visite nossa loja ou entre em contato agora
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/30">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">(11) 94189-8080</span>
              </div>
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/30">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Seg-Sex: 9h às 18h</span>
              </div>
              <div className="flex items-center gap-2 bg-black-soft/80 backdrop-blur-sm px-5 py-3 rounded-full border border-primary/30">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Guarulhos/SP</span>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        {/* Map Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                Visite Nossa <span className="text-primary">Loja</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Av. Salgado Filho, 1586 - Guarulhos/SP
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(255,85,0,0.3)] border-2 border-primary/30 hover:border-primary transition-all duration-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.8947542987855!2d-46.53368842469793!3d-23.46085617889831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5f8d8b8b8b7%3A0x1234567890abcdef!2sAv.%20Salgado%20Filho%2C%201586%20-%20Guarulhos%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Localização ICAR Veículos - Guarulhos/SP"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,85,0,0.2)] hover:-translate-y-2">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">Av. Salgado Filho, 1586</p>
                  <p className="text-muted-foreground">Guarulhos/SP</p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,85,0,0.2)] hover:-translate-y-2">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Horário</h3>
                  <p className="text-muted-foreground">Seg - Sex: 9h às 18h</p>
                  <p className="text-muted-foreground">Sábado: 9h às 14h</p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,85,0,0.2)] hover:-translate-y-2">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-slow" />
                  <h3 className="font-bold text-lg mb-2">Telefone</h3>
                  <p className="text-primary font-bold text-xl">(11) 94189-8080</p>
                  <p className="text-muted-foreground text-sm mt-2">WhatsApp Disponível</p>
                </div>
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
          <button
            className="relative rounded-full w-20 h-20 bg-primary hover:bg-primary/90 shadow-[0_20px_60px_rgba(255,85,0,0.6)] hover:shadow-[0_25px_70px_rgba(255,85,0,0.8)] transition-all duration-300 hover:scale-110 animate-glow-pulse flex items-center justify-center"
            onClick={() => window.open("https://wa.me/5511941898080", "_blank")}
          >
            <Phone className="h-10 w-10 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
