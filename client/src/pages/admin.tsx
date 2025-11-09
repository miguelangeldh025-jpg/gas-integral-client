import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import type { ServiceRequest } from "@shared/schema";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Phone, Mail, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const { toast } = useToast();
  
  const { data: requests, isLoading, isError, error } = useQuery<ServiceRequest[]>({
    queryKey: ["/api/service-requests"],
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      return await apiRequest("PATCH", `/api/service-requests/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/service-requests"] });
      toast({
        title: "Estado actualizado",
        description: "El estado de la solicitud ha sido actualizado.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado. Por favor, intente nuevamente.",
        variant: "destructive",
      });
      console.error("Error updating status:", error);
    },
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="gap-1"><AlertCircle className="w-3 h-3" /> Pendiente</Badge>;
      case "contacted":
        return <Badge className="gap-1 bg-blue-600"><Phone className="w-3 h-3" /> Contactado</Badge>;
      case "completed":
        return <Badge className="gap-1 bg-green-600"><CheckCircle className="w-3 h-3" /> Completado</Badge>;
      case "cancelled":
        return <Badge variant="destructive" className="gap-1"><XCircle className="w-3 h-3" /> Cancelado</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
          <p className="text-muted-foreground">Cargando solicitudes...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
          <Card className="p-12 text-center border-destructive">
            <p className="text-destructive font-semibold mb-2">Error al cargar las solicitudes</p>
            <p className="text-muted-foreground text-sm">
              {error instanceof Error ? error.message : "Por favor, intente recargar la página."}
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold" data-testid="text-admin-title">
              Panel de Administración
            </h1>
            <p className="text-muted-foreground mt-2">
              Gestión de solicitudes de servicio
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary" data-testid="text-total-requests">
              {requests?.length || 0}
            </div>
            <div className="text-sm text-muted-foreground">Solicitudes totales</div>
          </div>
        </div>

        <div className="grid gap-6">
          {requests && requests.length > 0 ? (
            requests.map((request) => (
              <Card key={request.id} className="p-6" data-testid={`card-request-${request.id}`}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold" data-testid="text-request-name">
                        {request.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {format(new Date(request.createdAt), "PPP 'a las' p", { locale: es })}
                      </div>
                    </div>
                    {getStatusBadge(request.status)}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <a 
                          href={`tel:${request.phone}`} 
                          className="hover:text-primary transition-colors"
                          data-testid="link-request-phone"
                        >
                          {request.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="font-medium">Servicio:</span> {request.service}
                      </div>
                    </div>
                    
                    {request.message && (
                      <div className="md:col-span-2">
                        <p className="text-sm text-muted-foreground">
                          <strong>Mensaje:</strong> {request.message}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-border flex-wrap">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatusMutation.mutate({ id: request.id, status: "contacted" })}
                      disabled={updateStatusMutation.isPending || request.status === "contacted"}
                      data-testid="button-status-contacted"
                    >
                      Marcar Contactado
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatusMutation.mutate({ id: request.id, status: "completed" })}
                      disabled={updateStatusMutation.isPending || request.status === "completed"}
                      data-testid="button-status-completed"
                    >
                      Marcar Completado
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatusMutation.mutate({ id: request.id, status: "cancelled" })}
                      disabled={updateStatusMutation.isPending || request.status === "cancelled"}
                      data-testid="button-status-cancelled"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No hay solicitudes de servicio aún.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
