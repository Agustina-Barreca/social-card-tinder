import { useState } from "react";
import { ContactCard } from "@/components/ContactCard";
import { TopNavigation } from "@/components/TopNavigation";
import { BottomNavigation } from "@/components/BottomNavigation";
import { dummyContacts, type Contact } from "@/data/contacts";

const Index = () => {
  const [contacts, setContacts] = useState<Contact[]>(dummyContacts);

  const handleSwipe = (direction: "left" | "right") => {
    console.log(`Swiped ${direction}`);
    
    // Remove the top card after a brief delay
    setTimeout(() => {
      setContacts((prev) => prev.slice(1));
    }, 300);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Status bar simulation */}
      <div className="flex items-center justify-between px-6 pt-2 text-foreground">
        <span className="text-2xl font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-6 h-6" />
        </div>
      </div>

      {/* Top Navigation */}
      <TopNavigation />

      {/* Cards Container */}
      <div className="flex-1 flex items-center justify-center relative px-6 py-8">
        <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
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
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
