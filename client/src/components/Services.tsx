import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Laptop, Wrench, Smartphone, Printer, HardDrive } from "lucide-react";

export default function Services() {
  const handleQuoteClick = (service: string) => {
    console.log(`Solicitar presupuesto para: ${service}`);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold" data-testid="text-services-title">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones profesionales para el hogar y la oficina
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="p-8 md:p-12 space-y-6 hover-elevate transition-transform" data-testid="card-gas-services">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Flame className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">Servicios de Gas</h3>
                  <Badge variant="secondary" className="mt-2">20+ Años de Experiencia</Badge>
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Reparación de estufas y hornos</span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Mantenimiento de calentadores</span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Instalación y reparación de tuberías de gas</span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Revisión y certificación de instalaciones</span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Servicio de emergencia disponible</span>
              </li>
            </ul>

            <Button 
              className="w-full"
              onClick={() => handleQuoteClick("Servicios de Gas")}
              data-testid="button-quote-gas"
            >
              Solicitar Presupuesto
            </Button>
          </Card>

          <Card className="p-8 md:p-12 space-y-6 hover-elevate transition-transform" data-testid="card-tech-services">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Laptop className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">Servicios Tecnológicos</h3>
                  <Badge variant="secondary" className="mt-2">Técnico Especializado</Badge>
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <Laptop className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Mantenimiento de equipos de cómputo</span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Reparación de celulares y tablets</span>
              </li>
              <li className="flex items-start gap-3">
                <Printer className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Servicio técnico de impresoras</span>
              </li>
              <li className="flex items-start gap-3">
                <HardDrive className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Actualización y optimización de sistemas</span>
              </li>
              <li className="flex items-start gap-3">
                <Laptop className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Soporte técnico a domicilio y remoto</span>
              </li>
            </ul>

            <Button 
              className="w-full"
              onClick={() => handleQuoteClick("Servicios Tecnológicos")}
              data-testid="button-quote-tech"
            >
              Solicitar Presupuesto
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
