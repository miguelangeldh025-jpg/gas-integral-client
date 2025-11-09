import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      service: "Reparación de Estufa",
      rating: 5,
      text: "Excelente servicio. Arreglaron mi estufa el mismo día y quedó como nueva. Muy profesionales y honestos con los precios."
    },
    {
      name: "Carlos Ramírez",
      service: "Mantenimiento de Computadora",
      rating: 5,
      text: "Mi computadora estaba muy lenta. La optimizaron y ahora funciona perfecta. Muy recomendado el servicio técnico."
    },
    {
      name: "Ana Martínez",
      service: "Instalación de Calentador",
      rating: 5,
      text: "Instalaron mi calentador nuevo con mucho profesionalismo. Explicaron todo el proceso y dejaron todo impecable."
    },
    {
      name: "José Luis Torres",
      service: "Reparación de Celular",
      rating: 5,
      text: "Arreglaron la pantalla de mi celular en tiempo record. Trabajo de calidad y buen precio. Definitivamente volveré."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold" data-testid="text-testimonials-title">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 space-y-4"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-base md:text-lg italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
