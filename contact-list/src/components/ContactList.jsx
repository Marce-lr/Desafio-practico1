import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, deleteContact, toggleFavorite }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default ContactList;
