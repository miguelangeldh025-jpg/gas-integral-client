import { Card } from "@/components/ui/card";
import teamPhoto from "@assets/generated_images/Father_and_son_team_photo_413a8a42.png";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold" data-testid="text-about-title">
              Un Negocio Familiar de Confianza
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-foreground/80">
              <p>
                Con más de <strong>20 años de experiencia</strong> en el sector de servicios técnicos, 
                ofrecemos soluciones profesionales y confiables para su hogar y oficina.
              </p>
              
              <p>
                Nuestro compromiso es brindar un servicio de calidad respaldado por años de 
                experiencia, conocimiento técnico actualizado y la calidez del trato familiar.
              </p>
              
              <p>
                Combinamos la experiencia tradicional en servicios de gas con las últimas 
                tecnologías en reparación de equipos electrónicos, ofreciendo una solución 
                integral para todas sus necesidades técnicas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <Card className="p-6 text-center space-y-2" data-testid="card-stat-experience">
                <div className="text-3xl md:text-4xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </Card>
              
              <Card className="p-6 text-center space-y-2" data-testid="card-stat-clients">
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
              </Card>
              
              <Card className="p-6 text-center space-y-2" data-testid="card-stat-services">
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Garantía</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={teamPhoto} 
                alt="Equipo familiar de técnicos profesionales" 
                className="w-full h-auto"
                data-testid="img-team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
