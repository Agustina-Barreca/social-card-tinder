import { useState, useRef } from "react";
import { Calendar, Star, Info } from "lucide-react";
import type { Contact } from "@/data/contacts";

interface ContactCardProps {
  contact: Contact;
  onSwipe?: (direction: "left" | "right") => void;
  isTop?: boolean;
  index?: number;
}

export const ContactCard = ({ 
  contact, 
  onSwipe,
  isTop = false,
  index = 0
}: ContactCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (clientX: number, clientY: number) => {
    if (!isTop) return;
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging || !isTop) return;
    const offsetX = clientX - dragStart.x;
    const offsetY = clientY - dragStart.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleDragEnd = () => {
    if (!isDragging || !isTop) return;
    setIsDragging(false);

    const threshold = 150;
    if (Math.abs(dragOffset.x) > threshold) {
      const direction = dragOffset.x > 0 ? "right" : "left";
      onSwipe?.(direction);
    } else {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const rotation = isDragging ? (dragOffset.x / 20) : 0;
  const opacity = isDragging ? Math.max(0.7, 1 - Math.abs(dragOffset.x) / 300) : 1;

  const scale = isTop ? 1 : 1 - (index * 0.05);
  const translateY = isTop ? 0 : index * -8;
  const zIndex = isTop ? 50 : 10 - index;

  return (
    <div
      ref={cardRef}
      className="absolute touch-none select-none"
      style={{
        transform: `
          translate(${dragOffset.x}px, ${dragOffset.y + translateY}px) 
          rotate(${rotation}deg)
          scale(${scale})
        `,
        opacity,
        transition: isDragging ? "none" : "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex,
        cursor: isTop ? "grab" : "default",
      }}
      onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleDragEnd}
    >
      <div className="relative w-[300px] sm:w-[340px]">
        {/* Red indicator line on the right */}
        <div className="absolute -right-3 top-16 bottom-16 w-1 bg-accent rounded-full z-10" />
        
        {/* Main card */}
        <div className="bg-card rounded-3xl p-6 card-stack-shadow border-4 border-foreground/10">
          {/* Avatar */}
          <div className="mb-4 flex justify-center">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-secondary">
              <img 
                src={contact.photo} 
                alt={contact.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="text-3xl font-bold text-card-foreground text-center mb-6">
            {contact.name}
          </h2>

          {/* Divider */}
          <div className="h-1 bg-card-foreground/20 rounded-full mb-6 w-20 mx-auto" />

          {/* Action buttons */}
          <div className="space-y-3 mb-4">
            <button className="w-full bg-accent text-accent-foreground font-bold text-lg py-4 rounded-2xl relative overflow-hidden group transition-transform active:scale-95">
              <span className="relative z-10">Give a minute</span>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="text-2xl transform rotate-12">✨</div>
              </div>
            </button>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-secondary text-secondary-foreground font-semibold text-base py-3 rounded-2xl transition-transform active:scale-95">
                Snooze
              </button>
              <button className="flex-1 bg-muted text-muted-foreground font-semibold text-base py-3 rounded-2xl transition-transform active:scale-95">
                Cancel
              </button>
            </div>
          </div>

          {/* Last contacted */}
          <p className="text-center text-muted-foreground mb-4 text-sm">
            Last contacted: {contact.lastContactDate}
          </p>

          {/* Bottom icons */}
          <div className="flex justify-center gap-6 items-center">
            <Calendar className="w-6 h-6 text-muted-foreground" />
            <Star className="w-7 h-7 text-yellow-500 fill-yellow-500" />
            <Info className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};
