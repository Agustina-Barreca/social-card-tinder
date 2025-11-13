import { dummyContacts } from "@/data/contacts";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export const ContactsList = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header with import button */}
      <div className="px-6 py-4 border-b border-foreground/20">
        <Button className="w-full" variant="outline">
          <Upload className="w-4 h-4 mr-2" />
          Importar Contactos
        </Button>
      </div>

      {/* Contacts list */}
      <div className="flex-1 overflow-y-auto">
        {dummyContacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center gap-4 px-6 py-4 border-b border-foreground/10 hover:bg-accent/50 transition-colors"
          >
            <img
              src={contact.photo}
              alt={contact.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{contact.name}</h3>
              <p className="text-sm text-muted-foreground">{contact.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
