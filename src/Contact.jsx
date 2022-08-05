import React from "react";
import ChangeContact from "./ChangeContact";

const Contact = ({ contact, setContactList }) => {
  const [isChangeOpen, setIsChangeOpen] = React.useState(false);
  const removeContact = id => {
    setContactList(contactList => contactList.filter(contact => contact.id !== id));
  };
  return isChangeOpen ? (
    <ChangeContact setIsChangeOpen={setIsChangeOpen} setContactList={setContactList} id={contact.id} />
  ) : (
    <li>
      <span>{contact.title}</span>
      <button onClick={() => setIsChangeOpen(true)}>изменить</button>
      <button onClick={() => removeContact(contact.id)}>удалить</button>
    </li>
  );
};

export default Contact;
