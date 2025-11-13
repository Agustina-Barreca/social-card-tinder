import { Home, Users, Settings } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "contacts", icon: Users, label: "Contacts" },
    { id: "config", icon: Settings, label: "Config" },
  ];

  return (
    <div className="bg-nav-bg border-t border-foreground/20 safe-area-inset-bottom">
      <div className="flex items-center justify-around px-4 py-2 sm:py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-0.5 sm:gap-1 transition-all duration-300 p-1.5 sm:p-2 min-w-[60px]"
              aria-label={tab.label}
            >
              <Icon 
                className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors ${
                  isActive ? "text-accent" : "text-foreground"
                }`}
                strokeWidth={2}
                fill={isActive ? "currentColor" : "none"}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
