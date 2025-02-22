import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  // Se cargan los contactos desde el .json
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("/contact.json");
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, isFavorite: !contact.isFavorite }
          : contact
      )
    );
  };

  // Números favoritos primero
  const sortedContacts = contacts.sort((a, b) => b.isFavorite - a.isFavorite);

  return (
    <div className="app-container">
      <h2>Lista de Contactos</h2>
      <div className="columns-container">
        <div className="column">
          <Form addContact={addContact} />
        </div>
        <div className="column">
          <ContactList
            contacts={sortedContacts}
            deleteContact={deleteContact}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
