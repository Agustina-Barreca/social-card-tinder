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
    <div className="bg-white border-t border-foreground/10 safe-area-inset-bottom">
      <div className="flex items-center justify-around px-3 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-0.5 transition-all duration-300 p-1.5 min-w-[65px]"
              aria-label={tab.label}
            >
              <Icon 
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-accent" : "text-foreground/60"
                }`}
                strokeWidth={2}
                fill={isActive ? "currentColor" : "none"}
              />
              <span className={`text-[10px] font-medium transition-colors ${
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
