import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertServiceRequest } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const createRequestMutation = useMutation({
    mutationFn: async (data: InsertServiceRequest) => {
      return await apiRequest("POST", "/api/service-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Solicitud enviada",
        description: "Nos pondremos en contacto con usted pronto.",
      });
      setFormData({ name: "", phone: "", service: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud. Por favor, intente nuevamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createRequestMutation.mutate(formData);
  };

  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked");
    window.open("https://wa.me/5215512345678", "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold" data-testid="text-contact-title">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para atender sus necesidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 md:p-12" data-testid="card-contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="55 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  data-testid="input-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Servicio requerido</Label>
                <Input
                  id="service"
                  placeholder="Ej: Reparación de estufa"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  data-testid="input-service"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Describa su requerimiento..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  data-testid="input-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={createRequestMutation.isPending}
                data-testid="button-submit"
              >
                {createRequestMutation.isPending ? "Enviando..." : "Enviar Solicitud"}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 space-y-6" data-testid="card-contact-info">
              <h3 className="text-2xl font-semibold">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <a 
                      href="tel:+525512345678" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      55 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Correo Electrónico</div>
                    <a 
                      href="mailto:servicios@ejemplo.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      servicios@ejemplo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Área de Servicio</div>
                    <div className="text-muted-foreground">
                      Ciudad de México y área metropolitana
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Horario</div>
                    <div className="text-muted-foreground">
                      Lun - Sáb: 8:00 AM - 8:00 PM<br />
                      Dom: 9:00 AM - 5:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Button 
              size="lg" 
              className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
              onClick={handleWhatsAppClick}
              data-testid="button-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
