import { useState, useEffect } from "react";
import { ContactCard } from "@/components/ContactCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import { GreatJobScreen } from "@/components/GreatJobScreen";
import { SplashScreen } from "@/components/SplashScreen";
import { ContactsList } from "@/components/ContactsList";
import { ConfigView } from "@/components/ConfigView";
import { dummyContacts, type Contact } from "@/data/contacts";

const DAILY_LIMIT = 5;
const STORAGE_KEY = "dailyContactsViewed";
const DATE_KEY = "lastViewedDate";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>(dummyContacts);
  const [viewedCount, setViewedCount] = useState(0);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);
  const [showBonusCard, setShowBonusCard] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // Initialize viewed count from localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem(DATE_KEY);
    
    if (lastDate !== today) {
      // New day, reset counter
      localStorage.setItem(DATE_KEY, today);
      localStorage.setItem(STORAGE_KEY, "0");
      setViewedCount(0);
      setHasReachedLimit(false);
    } else {
      // Same day, load existing count
      const stored = parseInt(localStorage.getItem(STORAGE_KEY) || "0");
      setViewedCount(stored);
      if (stored >= DAILY_LIMIT) {
        setHasReachedLimit(true);
      }
    }
  }, []);

  const handleSwipe = (direction: "left" | "right") => {
    console.log(`Swiped ${direction}`);
    
    // If it was a bonus card, go back to Great Job screen
    if (showBonusCard) {
      setShowBonusCard(false);
      setHasReachedLimit(true);
      setTimeout(() => {
        setContacts((prev) => prev.slice(1));
      }, 300);
      return;
    }
    
    // Increment viewed count
    const newCount = viewedCount + 1;
    setViewedCount(newCount);
    localStorage.setItem(STORAGE_KEY, newCount.toString());
    
    // Check if limit reached
    if (newCount >= DAILY_LIMIT) {
      setHasReachedLimit(true);
    }
    
    // Remove the top card after a brief delay
    setTimeout(() => {
      setContacts((prev) => prev.slice(1));
    }, 300);
  };

  const handleKeepGoing = () => {
    setShowBonusCard(true);
    setHasReachedLimit(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden w-full max-w-md mx-auto">
      {/* Main Content */}
      {activeTab === "home" ? (
        <div className="flex-1 flex items-center justify-center relative px-4 sm:px-6 py-6">
          {hasReachedLimit ? (
            <GreatJobScreen onKeepGoing={handleKeepGoing} />
          ) : (
            <div className="relative w-full h-full max-h-[520px] flex items-center justify-center">
              {contacts.length === 0 ? (
                <div className="text-center text-foreground">
                  <p className="text-2xl font-bold mb-2">No more contacts!</p>
                  <p className="text-muted-foreground">Check back later</p>
                </div>
              ) : (
                contacts.slice(0, 3).map((contact, index) => (
                  <ContactCard
                    key={contact.id}
                    contact={contact}
                    onSwipe={handleSwipe}
                    isTop={index === 0}
                    index={index}
                  />
                ))
              )}
            </div>
          )}
        </div>
      ) : activeTab === "contacts" ? (
        <ContactsList />
      ) : (
        <ConfigView />
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
