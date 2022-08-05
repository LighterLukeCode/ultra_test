import React from "react";
import Contact from "./Contact";

const ContactList = ({ contactList, setContactList }) => {
  return (
    <ul>
      {contactList.map(contact => (
        <Contact key={contact.id} setContactList={setContactList} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
