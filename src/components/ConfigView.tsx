import { User, Mail, Phone, Calendar, Bell, Lock, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ConfigView = () => {
  // Datos de ejemplo - más adelante se conectarán con autenticación real
  const userData = {
    name: "Demo User",
    email: "user@example.com",
    phone: "+34 600 000 000",
    memberSince: "January 2024",
    contactsCount: 100,
    dailyGoal: 5,
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-background p-4 sm:p-6 overflow-hidden">
      <div className="w-full h-full max-w-md flex flex-col bg-card rounded-3xl shadow-lg overflow-y-auto">
        {/* Profile Header */}
        <div className="px-6 pt-8 pb-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-slate-600 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-card-foreground">{userData.name}</h2>
              <p className="text-sm text-muted-foreground">{userData.email}</p>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="px-6 pb-6">
          <h3 className="text-base font-bold text-card-foreground mb-3">Account Information</h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
              <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-card-foreground text-sm truncate">{userData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
              <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Phone Number</p>
                <p className="font-medium text-card-foreground text-sm truncate">{userData.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/30">
              <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Member Since</p>
                <p className="font-medium text-card-foreground text-sm">{userData.memberSince}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="px-6 pb-6">
          <h3 className="text-base font-bold text-card-foreground mb-3">Statistics</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-lg bg-accent/30 text-center">
              <p className="text-xs text-muted-foreground mb-1">Contacts</p>
              <p className="text-3xl font-bold text-card-foreground">{userData.contactsCount}</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/30 text-center">
              <p className="text-xs text-muted-foreground mb-1">Daily Goal</p>
              <p className="text-3xl font-bold text-card-foreground">{userData.dailyGoal}</p>
            </div>
          </div>
        </div>

        {/* Settings Options */}
        <div className="px-6 pb-6">
          <h3 className="text-base font-bold text-card-foreground mb-3">Settings</h3>
          
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-card-foreground" />
                <span className="text-sm font-medium text-card-foreground">Notifications</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-card-foreground" />
                <span className="text-sm font-medium text-card-foreground">Privacy & Security</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-destructive/10 transition-colors">
              <LogOut className="w-5 h-5 text-destructive" />
              <span className="text-sm font-medium text-destructive">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
