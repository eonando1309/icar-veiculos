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
      className="group bg-card border-2 border-border overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,85,0,0.4)] animate-fade-in hover:-translate-y-3"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={`${brand} ${model} ${year} - Veículo seminovo disponível na ICAR`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black-deep/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Price Badge with glow effect */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-bold text-xl shadow-[0_0_30px_rgba(255,85,0,0.6)] animate-glow-pulse">
          {price}
        </div>
        
        {/* Featured Badge */}
        <div className="absolute top-4 left-4 bg-black-soft/80 backdrop-blur-sm text-primary border border-primary/50 px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider">
          ⭐ Destaque
        </div>

        {/* Hover overlay with shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      <CardContent className="p-6 relative">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
            {brand}
          </h3>
          <p className="text-xl text-muted-foreground font-medium">{model}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 bg-black-soft/50 p-4 rounded-lg border border-border group-hover:border-primary/30 transition-colors duration-300">
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Ano</div>
              <span className="text-sm font-semibold">{year}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
            <Gauge className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">KM</div>
              <span className="text-sm font-semibold">{mileage}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
            <Fuel className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Combustível</div>
              <span className="text-sm font-semibold">{fuel}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
            <Car className="h-5 w-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Condição</div>
              <span className="text-sm font-semibold">Seminovo</span>
            </div>
          </div>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-6 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(255,85,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,85,0,0.5)] relative overflow-hidden"
          onClick={() => window.open("tel:+5511941898080", "_self")}
        >
          <span className="relative z-10 flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Consultar Agora
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Button>
      </CardContent>
    </Card>
  );
};
