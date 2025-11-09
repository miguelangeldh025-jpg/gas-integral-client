import { Card } from "@/components/ui/card";
import { Award, Clock, Shield, ThumbsUp, DollarSign, Users } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description: "Más de 20 años brindando servicios técnicos de calidad"
    },
    {
      icon: Users,
      title: "Servicio Familiar",
      description: "Trato personalizado y atención dedicada a cada cliente"
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description: "Disponibilidad inmediata para emergencias y servicios urgentes"
    },
    {
      icon: Shield,
      title: "Garantía de Calidad",
      description: "Todos nuestros trabajos están respaldados por garantía"
    },
    {
      icon: DollarSign,
      title: "Precios Justos",
      description: "Presupuestos transparentes sin costos ocultos"
    },
    {
      icon: ThumbsUp,
      title: "Técnicos Certificados",
      description: "Personal capacitado y con certificaciones actualizadas"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold" data-testid="text-why-title">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromiso, calidad y confianza en cada servicio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-8 space-y-4 hover-elevate transition-transform"
                data-testid={`card-benefit-${index}`}
              >
                <div className="p-3 bg-primary/10 rounded-2xl w-fit">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
