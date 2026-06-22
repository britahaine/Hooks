interface Contact {
  id: string;
  name: string;
  email: string;
}

interface ContactListProps {
  contacts: Contact[];
}

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <div>
      <h3>Contact list</h3>
      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.name} - {contact.email}
        </div>
      ))}
    </div>
  );
}
