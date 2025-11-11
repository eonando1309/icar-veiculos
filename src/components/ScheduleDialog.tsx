import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Calendar, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const scheduleSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome muito longo" }),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s\(\)\-\+]+$/, { message: "Telefone inválido" })
    .min(10, { message: "Telefone muito curto" })
    .max(20, { message: "Telefone muito longo" }),
  email: z
    .string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email muito longo" }),
  vehicle: z
    .string()
    .trim()
    .min(2, { message: "Especifique o veículo de interesse" })
    .max(100, { message: "Descrição muito longa" }),
  message: z
    .string()
    .trim()
    .max(500, { message: "Mensagem muito longa (máximo 500 caracteres)" })
    .optional(),
});

type ScheduleFormData = z.infer<typeof scheduleSchema>;

interface ScheduleDialogProps {
  vehicleName?: string;
  triggerButton?: React.ReactNode;
  variant?: "default" | "floating";
}

export const ScheduleDialog = ({ 
  vehicleName = "", 
  triggerButton,
  variant = "default" 
}: ScheduleDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      vehicle: vehicleName,
    },
  });

  const onSubmit = async (data: ScheduleFormData) => {
    try {
      // Sanitize and encode data for WhatsApp
      const message = `
🚗 *AGENDAMENTO DE VISITA - ICAR VEÍCULOS*

👤 *Nome:* ${data.name}
📱 *Telefone:* ${data.phone}
📧 *Email:* ${data.email}
🚙 *Veículo de Interesse:* ${data.vehicle}
${data.message ? `\n💬 *Mensagem:* ${data.message}` : ''}

_Aguardo retorno para agendar minha visita! ⚡_
      `.trim();

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5511941898080?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "✅ Redirecionando para WhatsApp!",
        description: "Seus dados foram preparados. Complete o agendamento no WhatsApp.",
      });
      
      setOpen(false);
      reset();
    } catch (error) {
      toast({
        title: "❌ Erro ao processar",
        description: "Tente novamente ou ligue diretamente.",
        variant: "destructive",
      });
    }
  };

  const defaultTrigger = variant === "floating" ? (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
      <Button
        size="lg"
        className="relative rounded-full w-20 h-20 bg-primary hover:bg-primary/90 shadow-[0_20px_60px_rgba(255,85,0,0.6)] hover:shadow-[0_25px_70px_rgba(255,85,0,0.8)] transition-all duration-300 hover:scale-110 animate-glow-pulse"
      >
        <Calendar className="h-10 w-10" />
      </Button>
    </div>
  ) : (
    <Button 
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-[0_20px_60px_rgba(255,85,0,0.4)] hover:shadow-[0_25px_70px_rgba(255,85,0,0.6)] transition-all duration-300 hover:scale-110 group relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center">
        <Calendar className="mr-2 h-6 w-6 animate-bounce-slow" />
        Agendar Visita Agora
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-card border-2 border-primary/50 shadow-[0_20px_60px_rgba(255,85,0,0.4)]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-extrabold flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            Agende Sua Visita
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Preencha os dados abaixo e vamos preparar tudo para seu atendimento VIP! 🚗✨
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-bold">
              Nome Completo *
            </Label>
            <Input
              id="name"
              {...register("name")}
              className="border-2 border-border focus:border-primary transition-colors"
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="text-sm text-destructive font-semibold">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-bold">
              Telefone/WhatsApp *
            </Label>
            <Input
              id="phone"
              {...register("phone")}
              className="border-2 border-border focus:border-primary transition-colors"
              placeholder="(11) 99999-9999"
            />
            {errors.phone && (
              <p className="text-sm text-destructive font-semibold">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-bold">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="border-2 border-border focus:border-primary transition-colors"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive font-semibold">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicle" className="text-sm font-bold">
              Veículo de Interesse *
            </Label>
            <Input
              id="vehicle"
              {...register("vehicle")}
              className="border-2 border-border focus:border-primary transition-colors"
              placeholder="Ex: Honda Civic 2020"
            />
            {errors.vehicle && (
              <p className="text-sm text-destructive font-semibold">
                {errors.vehicle.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-bold">
              Mensagem (Opcional)
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              className="border-2 border-border focus:border-primary transition-colors resize-none"
              placeholder="Conte-nos mais sobre o que procura..."
              rows={3}
            />
            {errors.message && (
              <p className="text-sm text-destructive font-semibold">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 border-2"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_10px_30px_rgba(255,85,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,85,0,0.5)] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                {isSubmitting ? "Enviando..." : "Enviar para WhatsApp"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </form>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            🔒 <span className="font-bold">Seus dados estão seguros.</span> Usaremos apenas para agendamento.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
