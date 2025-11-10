import { Shield, Clock, DollarSign, Award, Headphones, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Segurança e Confiança",
    description: "Todos os veículos passam por rigorosa inspeção e vêm com garantia",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Resposta em até 24 horas e processo de compra ágil",
  },
  {
    icon: DollarSign,
    title: "Melhor Custo-Benefício",
    description: "Preços competitivos e diversas opções de financiamento",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Veículos selecionados com procedência e histórico verificado",
  },
  {
    icon: Headphones,
    title: "Suporte Completo",
    description: "Equipe especializada para tirar todas as suas dúvidas",
  },
  {
    icon: FileCheck,
    title: "Documentação em Dia",
    description: "Toda documentação regularizada e processo transparente",
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher a <span className="text-primary">ICAR?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 10 anos de experiência no mercado automotivo de Guarulhos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-pulse-glow">
                      <Icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
