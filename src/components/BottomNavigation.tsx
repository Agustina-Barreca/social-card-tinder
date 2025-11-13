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
      <div className="flex items-center justify-around px-4 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 transition-all duration-300 p-2 min-w-[70px]"
              aria-label={tab.label}
            >
              <Icon 
                className={`w-6 h-6 transition-colors ${
                  isActive ? "text-accent" : "text-foreground/60"
                }`}
                strokeWidth={2}
                fill={isActive ? "currentColor" : "none"}
              />
              <span className={`text-xs font-medium transition-colors ${
                isActive ? "text-accent" : "text-foreground/60"
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
