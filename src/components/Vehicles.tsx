import { VehicleCard } from "./VehicleCard";

const vehicles = [
  {
    brand: "Chevrolet",
    model: "Onix Plus Premier",
    year: "2023/2024",
    price: "R$ 89.900",
    mileage: "15.000 km",
    fuel: "Flex",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop"
  },
  {
    brand: "Volkswagen",
    model: "T-Cross Highline",
    year: "2022/2023",
    price: "R$ 124.900",
    mileage: "22.000 km",
    fuel: "Flex",
    image: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?w=800&auto=format&fit=crop"
  },
  {
    brand: "Hyundai",
    model: "HB20S Diamond",
    year: "2023/2023",
    price: "R$ 78.900",
    mileage: "18.000 km",
    fuel: "Flex",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop"
  },
  {
    brand: "Jeep",
    model: "Compass Limited",
    year: "2022/2022",
    price: "R$ 159.900",
    mileage: "28.000 km",
    fuel: "Flex",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop"
  },
  {
    brand: "Fiat",
    model: "Argo Trekking",
    year: "2023/2024",
    price: "R$ 72.900",
    mileage: "12.000 km",
    fuel: "Flex",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop"
  },
  {
    brand: "Toyota",
    model: "Corolla XEi",
    year: "2022/2023",
    price: "R$ 139.900",
    mileage: "25.000 km",
    fuel: "Flex",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop"
  }
];

export const Vehicles = () => {
  return (
    <section id="veiculos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veículos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira nossa seleção de veículos seminovos com a melhor qualidade e procedência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard 
              key={index} 
              {...vehicle}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
