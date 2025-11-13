import { dummyContacts } from "@/data/contacts";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export const ContactsList = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header with import button */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-foreground/20 bg-background">
        <Button className="w-full text-sm sm:text-base" variant="outline" size="sm">
          <Upload className="w-4 h-4 mr-2" />
          Importar Contactos
        </Button>
      </div>

      {/* Contacts list */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        {dummyContacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-foreground/10 active:bg-accent/30 transition-colors"
          >
            <img
              src={contact.photo}
              alt={contact.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{contact.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{contact.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
