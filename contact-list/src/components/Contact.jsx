import React from "react";

const Contact = ({ contact, deleteContact, toggleFavorite }) => {
  return (
    <div>
      <h3>
        {contact.name} {contact.lastName}
      </h3>
      <p>Teléfono: {contact.phone} </p>
      <button onClick={() => toggleFavorite(contact.id)}>
        {contact.isFavorite
          ? "Quitar número de Favorios"
          : "Agregar número a Favoritos"}
      </button>
      <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
    </div>
  );
};

export default Contact;
