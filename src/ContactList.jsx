import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const ContactList = () => {
  const { items, filter } = useSelector(state => state.contactSlice);

  return (
    <ul>
      {items
        .filter(contact => contact.title.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
