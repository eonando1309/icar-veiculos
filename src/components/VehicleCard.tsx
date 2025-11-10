import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Fuel, Calendar, Gauge, Phone } from "lucide-react";

interface VehicleCardProps {
  brand: string;
  model: string;
  year: string;
  price: string;
  mileage: string;
  fuel: string;
  image: string;
  delay?: number;
}

export const VehicleCard = ({ brand, model, year, price, mileage, fuel, image, delay = 0 }: VehicleCardProps) => {
  return (
    <Card 
      className="group bg-card border-border overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg animate-pulse-glow">
          {price}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {brand}
        </h3>
        <p className="text-xl text-muted-foreground mb-4">{model}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm">{year}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gauge className="h-5 w-5 text-primary" />
            <span className="text-sm">{mileage}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Fuel className="h-5 w-5 text-primary" />
            <span className="text-sm">{fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Car className="h-5 w-5 text-primary" />
            <span className="text-sm">Seminovo</span>
          </div>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group-hover:scale-105 transition-all duration-300"
          onClick={() => window.open("tel:+5511941898080", "_self")}
        >
          <Phone className="mr-2 h-5 w-5" />
          Consultar Veículo
        </Button>
      </CardContent>
    </Card>
  );
};
