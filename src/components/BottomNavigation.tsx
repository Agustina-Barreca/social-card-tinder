import { Home, User, Calendar, Moon, Trophy, Settings } from "lucide-react";
import { useState } from "react";

export const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "moon", icon: Moon, label: "Moon" },
    { id: "trophy", icon: Trophy, label: "Trophy" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="bg-nav-bg border-t border-foreground/20">
      <div className="flex items-center justify-around px-4 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-1 transition-all duration-300 p-2"
              aria-label={tab.label}
            >
              <Icon 
                className={`w-7 h-7 transition-colors ${
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
