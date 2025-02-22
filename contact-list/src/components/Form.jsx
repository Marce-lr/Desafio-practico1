import React, { useState } from "react";
// Usando useState para manejar el estado del formulario, similar a la guia 02 código de Todo
const Form = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    phone: "",
    isFavorite: false,
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de campos vacíos, similar a la lógica del formulario de Todo guia02
    if (!contact.name || !contact.lastName || !contact.phone) {
      alert("Todos los campos son obligatorios");
      return;
    }
    contact.id = Date.now(); // Similar a la forma de los IDs en la lista de productos guia03
    addContact(contact);
    setContact({ name: "", lastName: "", phone: "", isFavorite: false });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        onChange={handleChange}
        value={contact.name}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        onChange={handleChange}
        value={contact.lastName}
      />
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        onChange={handleChange}
        value={contact.phone}
      />
      <button type="submit">Agregar Contacto</button>
    </form>
  );
};

export default Form;
