import React from "react";

const Contact = ({ contact, deleteContact, toggleFavorite }) => {
  return (
    <div className="contact">
      <h3>
        {contact.name} {contact.lastName}
      </h3>
      <p>Teléfono: {contact.phone} </p>
      <button className="fav-button" onClick={() => toggleFavorite(contact.id)}>
        {contact.isFavorite ? (
          <>
            <img
              src="https://i.pinimg.com/736x/4a/78/a3/4a78a381c5ee1275306dd041faf6f5a8.jpg"
              alt="Favorite"
              className="fav-image"
            />
            Quitar número de Favoritos
          </>
        ) : (
          "Agregar número a Favoritos"
        )}
      </button>
      <button
        className="delete-button"
        onClick={() => deleteContact(contact.id)}
      >
        Eliminar
      </button>
    </div>
  );
};
export default Contact;
