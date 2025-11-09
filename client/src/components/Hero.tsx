import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Professional_gas_appliance_technician_working_38ac76e0.png";

export default function Hero() {
  const handleContactClick = () => {
    console.log("Solicitar servicio clicked");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServicesClick = () => {
    console.log("Ver servicios clicked");
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-8">
        <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground border-0 px-6 py-2 text-base" data-testid="badge-experience">
          +20 Años de Experiencia
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight" data-testid="text-hero-title">
          Servicios Técnicos Profesionales para su Hogar y Oficina
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Expertos en reparación de estufas, calentadores, tuberías de gas y mantenimiento de equipos de cómputo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground border-0 min-w-[200px]"
            onClick={handleContactClick}
            data-testid="button-contact"
          >
            Solicitar Servicio
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 min-w-[200px]"
            onClick={handleServicesClick}
            data-testid="button-services"
          >
            Ver Servicios
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Disponible 7 días</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Servicio Rápido</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Garantía de Calidad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
