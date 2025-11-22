import { Flame, Laptop, Phone, Mail } from "lucide-react";
import { SiFacebook, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case "Facebook":
        // Opción: No tengo Facebook, el botón no hace nada.
        console.log("Facebook not configured");
        break;
      case "WhatsApp":
        // CORRECCIÓN APLICADA: Abrir el enlace de WhatsApp
        window.open("https://wa.me/5215512345678", "_blank"); 
        break;
      default:
        console.log(`${platform} clicked`);
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold" data-testid="text-footer-company">
              Servicios Técnicos Profesionales
            </h3>
            <p className="text-muted-foreground">
              Más de 20 años brindando soluciones confiables para su hogar y oficina.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleSocialClick("Facebook")}
                className="p-2 bg-primary/10 rounded-lg hover-elevate transition-colors"
                aria-label="Facebook"
                data-testid="button-facebook"
              >
                <SiFacebook className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() => handleSocialClick("WhatsApp")}
                className="p-2 bg-green-600/10 rounded-lg hover-elevate transition-colors"
                aria-label="WhatsApp"
                data-testid="button-whatsapp-footer"
              >
                <SiWhatsapp className="w-5 h-5 text-green-600" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Reparación de estufas</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Mantenimiento de calentadores</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Instalación de tuberías de gas</span>
              </li>
              <li className="flex items-center gap-2">
                <Laptop className="w-4 h-4" />
                <span>Reparación de computadoras</span>
              </li>
              <li className="flex items-center gap-2">
                <Laptop className="w-4 h-4" />
                <span>Servicio técnico de celulares</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+525512345678" className="hover:text-primary transition-colors">
                  55 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:servicios@ejemplo.com" className="hover:text-primary transition-colors">
                  servicios@ejemplo.com
                </a>
              </li>
              <li className="text-sm">
                <strong>Horario:</strong><br />
                Lun - Sáb: 8:00 AM - 8:00 PM<br />
                Dom: 9:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Servicios Técnicos Profesionales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}