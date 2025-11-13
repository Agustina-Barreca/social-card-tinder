import { User, Mail, Phone, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ConfigView = () => {
  // Datos de ejemplo - más adelante se conectarán con autenticación real
  const userData = {
    name: "Usuario Demo",
    email: "usuario@ejemplo.com",
    phone: "+34 600 000 000",
    memberSince: "Enero 2024",
    contactsCount: 100,
    dailyGoal: 5,
  };

  return (
    <div className="flex-1 flex flex-col overflow-y-auto overscroll-contain">
      {/* Profile Header */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 bg-accent/30">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">{userData.name}</h2>
            <p className="text-sm sm:text-base text-muted-foreground">{userData.email}</p>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Información de Cuenta</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground text-sm sm:text-base truncate">{userData.email}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-3 sm:gap-4">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Teléfono</p>
                <p className="font-medium text-foreground text-sm sm:text-base truncate">{userData.phone}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-center gap-3 sm:gap-4">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Miembro desde</p>
                <p className="font-medium text-foreground text-sm sm:text-base">{userData.memberSince}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Statistics */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Estadísticas</h3>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-accent/30">
              <p className="text-xs sm:text-sm text-muted-foreground">Contactos</p>
              <p className="text-xl sm:text-2xl font-bold text-foreground">{userData.contactsCount}</p>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-accent/30">
              <p className="text-xs sm:text-sm text-muted-foreground">Meta Diaria</p>
              <p className="text-xl sm:text-2xl font-bold text-foreground">{userData.dailyGoal}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Settings Options */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Ajustes</h3>
          
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm sm:text-base h-9 sm:h-10">
              <Settings className="w-4 h-4 mr-2" />
              Preferencias
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm sm:text-base h-9 sm:h-10">
              Notificaciones
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm sm:text-base h-9 sm:h-10">
              Privacidad
            </Button>
          </div>
        </div>

        <Separator />

        {/* Actions */}
        <div className="space-y-2 pb-6">
          <Button variant="outline" className="w-full text-sm sm:text-base h-9 sm:h-10">
            Editar Perfil
          </Button>
          <Button variant="destructive" className="w-full text-sm sm:text-base h-9 sm:h-10">
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </div>
  );
};
