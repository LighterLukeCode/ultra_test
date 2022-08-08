import React from "react";
import { useAppSelector } from "./redux/hooks";
import Contact from "./Contact";
import ContactType from "./types/contact";

const ContactList = () => {
  const { items, filter } = useAppSelector(state => state.contactSlice);

  return (
    <ul>
      {items
        .filter((contact: ContactType) => contact.title.toLowerCase().includes(filter.toLowerCase()))
        .map((contact: ContactType) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
