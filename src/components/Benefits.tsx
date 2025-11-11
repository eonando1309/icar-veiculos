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
    <section id="beneficios" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background opacity-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-primary/10 border border-primary/30 text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-glow-pulse">
            Diferenciais ICAR
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 px-4 md:px-8 py-6 rounded-2xl bg-black-deep/85 backdrop-blur-md border border-primary/30 inline-block shadow-[0_0_60px_rgba(255,85,0,0.3)]">
            Por Que Escolher a <span className="text-primary drop-shadow-[0_0_20px_rgba(255,85,0,0.5)]">ICAR?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-6 py-4 rounded-xl bg-black-deep/70 backdrop-blur-sm border border-primary/20 mt-6 shadow-[0_0_40px_rgba(255,85,0,0.2)]">
            Mais de 10 anos transformando sonhos em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,85,0,0.3)] animate-scale-in hover:-translate-y-4 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 border-2 border-primary/30 group-hover:border-primary group-hover:animate-glow-pulse">
                        <Icon className="h-14 w-14 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300 text-base">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust statement */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sua Satisfação é Nossa <span className="text-primary">Prioridade</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Centenas de clientes satisfeitos em Guarulhos e região confiam na ICAR para realizar o sonho do carro próprio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
