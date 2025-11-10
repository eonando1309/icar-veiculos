import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo! Venha conhecer nossa loja ou entre em contato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card 
                key={index}
                className="group bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-pulse-glow">
                      <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground mb-1 font-medium">
                    {info.content}
                  </p>
                  {info.content2 && (
                    <p className="text-muted-foreground mb-4 font-medium">
                      {info.content2}
                    </p>
                  )}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4 group-hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(info.action, "_blank")}
                  >
                    {info.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-8 right-8 z-50 animate-float">
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-2xl animate-pulse-glow"
            onClick={() => window.open("https://wa.me/5511941898080", "_blank")}
          >
            <Phone className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  );
};
