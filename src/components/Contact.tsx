import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScheduleDialog } from "./ScheduleDialog";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 94189-8080",
    action: "tel:+5511941898080",
    buttonText: "Ligar Agora",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Salgado Filho, 1586",
    content2: "Guarulhos/SP",
    action: "https://maps.google.com/?q=Av.+Salgado+Filho+1586+Guarulhos+SP",
    buttonText: "Ver no Mapa",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@icar_veiculosbr",
    action: "https://www.instagram.com/icar_veiculosbr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    buttonText: "Seguir",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sex: 9h às 18h",
    content2: "Sábado: 9h às 14h",
    action: "tel:+5511941898080",
    buttonText: "Agendar Visita",
  },
];

export const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary/10 border border-primary/30 text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-glow-pulse">
            📞 Fale Conosco
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 px-4 md:px-8 py-6 rounded-2xl bg-black-deep/85 backdrop-blur-md border border-primary/30 inline-block shadow-[0_0_60px_rgba(255,85,0,0.3)]">
            Realize Seu Sonho <span className="text-primary drop-shadow-[0_0_20px_rgba(255,85,0,0.5)]">Hoje!</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-6 py-4 mt-6 rounded-xl bg-black-deep/70 backdrop-blur-sm border border-primary/20 shadow-[0_0_40px_rgba(255,85,0,0.2)]">
            Atendimento rápido e personalizado. Entre em contato agora!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,85,0,0.3)] animate-slide-up hover:-translate-y-3 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative p-5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 border-2 border-primary/30 group-hover:border-primary group-hover:animate-glow-pulse">
                        <Icon className="h-12 w-12 text-primary group-hover:scale-125 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="text-foreground mb-1 font-bold text-lg">
                    {info.content}
                  </p>
                  {info.content2 && (
                    <p className="text-muted-foreground mb-4 font-medium">
                      {info.content2}
                    </p>
                  )}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-4 py-6 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(255,85,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,85,0,0.5)] relative overflow-hidden"
                    onClick={() => window.open(info.action, "_blank")}
                  >
                    <span className="relative z-10">{info.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Urgency CTA */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary rounded-2xl p-10 backdrop-blur-sm relative overflow-hidden" style={{ animationDelay: "400ms" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shine"></div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 relative z-10 px-4 py-3 rounded-xl bg-black-deep/80 backdrop-blur-sm border border-primary/20 shadow-[0_0_30px_rgba(255,85,0,0.2)]">
            🚗 Não Perca Tempo! Seu Carro Ideal Te Espera
          </h3>
          <p className="text-xl text-muted-foreground mb-6 relative z-10 px-4 py-2 rounded-lg bg-black-deep/60 backdrop-blur-sm">
            Atendimento imediato pelo WhatsApp ou telefone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <ScheduleDialog />
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl transition-all duration-300 hover:scale-110"
              onClick={() => window.open("tel:+5511941898080", "_self")}
            >
              📞 (11) 94189-8080
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
