import { useState, useRef } from "react";
import { Calendar, Star, Info, Copy, MessageSquare, Phone, Clock, X, Check } from "lucide-react";
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
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const handleFlip = () => {
    // Play flip sound
    if (!audioRef.current) {
      audioRef.current = new Audio('/card-flip.mp3');
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    
    setIsFlipped(!isFlipped);
  };

  const handleCopyPrompt = () => {
    const prompt = `Hey ${contact.name.split(' ')[0]}! Just wanted to check in and see how you're doing. It's been a while since we last connected!`;
    navigator.clipboard.writeText(prompt);
  };

  const handleOpenSMS = () => {
    window.open(`sms:${contact.phoneNumber}`);
  };

  const handleCall = () => {
    window.open(`tel:${contact.phoneNumber}`);
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
        perspective: "1000px",
      }}
      onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleDragEnd}
    >
      <div 
        className="relative w-[300px] sm:w-[340px]"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Red indicator line on the right */}
        <div className="absolute -right-3 top-16 bottom-16 w-1 bg-accent rounded-full z-10" />
        
        {/* FRONT SIDE - Main card */}
        <div 
          onClick={handleFlip}
          className="bg-card rounded-3xl p-6 card-stack-shadow border-4 border-foreground/10 cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
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
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
              className="w-full bg-accent text-accent-foreground font-bold text-lg py-4 rounded-2xl relative overflow-hidden group transition-transform active:scale-95"
            >
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

        {/* BACK SIDE - Action options */}
        <div 
          className="absolute top-0 left-0 w-full bg-card rounded-3xl p-6 card-stack-shadow border-4 border-foreground/10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={(e) => {
            // Only flip if clicking the background, not buttons
            if (e.target === e.currentTarget) {
              handleFlip();
            }
          }}
        >
          {/* Small avatar */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-secondary">
              <img 
                src={contact.photo} 
                alt={contact.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-2xl font-bold text-card-foreground text-center mb-6">
            {contact.name}
          </h3>

          {/* Action buttons */}
          <div className="space-y-3 mb-6">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleCopyPrompt();
              }}
              className="w-full bg-primary text-primary-foreground font-semibold text-base py-4 rounded-2xl transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Copy className="w-5 h-5" />
              Copy Starter Prompt
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleOpenSMS();
              }}
              className="w-full bg-secondary text-secondary-foreground font-semibold text-base py-4 rounded-2xl transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Open SMS
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleCall();
              }}
              className="w-full bg-accent text-accent-foreground font-semibold text-base py-4 rounded-2xl transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Initiate a Call
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-4" />

          {/* Bottom actions */}
          <div className="flex gap-2">
            <button 
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-muted text-muted-foreground font-medium text-sm py-3 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-1"
            >
              <Clock className="w-4 h-4" />
              Snooze
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
              className="flex-1 bg-muted text-muted-foreground font-medium text-sm py-3 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-1"
            >
              <X className="w-4 h-4" />
              Skip
            </button>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-primary/10 text-primary font-medium text-sm py-3 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-1"
            >
              <Check className="w-4 h-4" />
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
