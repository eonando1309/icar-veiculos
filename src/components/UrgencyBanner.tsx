import { AlertCircle, Clock, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export const UrgencyBanner = () => {
  const [onlineUsers, setOnlineUsers] = useState(12);
  
  useEffect(() => {
    // Simulate dynamic online users
    const interval = setInterval(() => {
      setOnlineUsers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(8, Math.min(25, prev + change));
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm border-b-2 border-primary shadow-[0_10px_40px_rgba(255,85,0,0.5)] animate-slide-down">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-primary-foreground">
          <div className="flex items-center gap-2 animate-pulse">
            <AlertCircle className="h-5 w-5" />
            <span className="font-bold text-sm md:text-base">
              ⚡ <span className="text-white">OFERTA RELÂMPAGO</span> - Condições especiais hoje
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 animate-spin-slow" />
            <span className="font-semibold text-sm md:text-base">
              Tempo limitado - Agende JÁ!
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-black-deep/40 px-3 py-1 rounded-full">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="font-bold text-sm">
              <span className="text-green-400">{onlineUsers}</span> pessoas visualizando agora
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
