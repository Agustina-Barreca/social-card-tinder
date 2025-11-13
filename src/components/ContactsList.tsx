import { dummyContacts } from "@/data/contacts";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export const ContactsList = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-background p-4 sm:p-6 overflow-hidden">
      <div className="w-full h-full max-w-md flex flex-col bg-card rounded-3xl shadow-lg overflow-hidden">
        {/* Header with import button */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-border">
          <Button 
            className="w-full text-sm sm:text-base bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20 border-cyan-500/20" 
            variant="outline" 
            size="default"
          >
            <Upload className="w-4 h-4 mr-2" />
            Import Contacts
          </Button>
        </div>

        {/* Contacts list */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {dummyContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-border/50 active:bg-accent/30 transition-colors"
            >
              <img
                src={contact.photo}
                alt={contact.name}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{contact.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{contact.phoneNumber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
