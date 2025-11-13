import { useState } from "react";
import { ContactCard } from "@/components/ContactCard";
import { TopNavigation } from "@/components/TopNavigation";
import { BottomNavigation } from "@/components/BottomNavigation";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastConnected: string;
}

const initialContacts: Contact[] = [
  {
    id: "1",
    name: "Jane Doe",
    avatar: avatar1,
    lastConnected: "Nov, 7, 2025",
  },
  {
    id: "2",
    name: "John Smith",
    avatar: avatar2,
    lastConnected: "Nov, 5, 2025",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    avatar: avatar3,
    lastConnected: "Nov, 3, 2025",
  },
];

const Index = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

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
                name={contact.name}
                avatar={contact.avatar}
                lastConnected={contact.lastConnected}
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
