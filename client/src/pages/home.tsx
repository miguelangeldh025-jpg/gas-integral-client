import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-background p-6">
      <Card className="max-w-2xl w-full px-8 py-12 md:px-16 md:py-16 text-center space-y-6 shadow-xl">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" data-testid="text-greeting">
            ¡Hola! Soy Miguel Díaz
          </h1>
          
          <div className="flex justify-center">
            <Badge className="rounded-full px-6 py-2 text-lg" data-testid="badge-group">
              Grupo: 3A
            </Badge>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto" data-testid="text-description">
          Esta aplicación está alojada en un entorno PaaS educativo.
        </p>
        
        <div className="pt-8 border-t border-border mt-8">
          <p className="text-sm text-muted-foreground" data-testid="text-powered">
            Powered by Node.js
          </p>
        </div>
      </Card>
    </div>
  );
}
