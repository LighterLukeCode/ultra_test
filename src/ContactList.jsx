import React from "react";

const ContactList = ({ contactList, setContactList }) => {
  const removeContact = id => {
    setContactList([...contactList.filter(contact => contact.id !== id)]);
  };
  return (
    <ul>
      {contactList.map(contact => (
        <div key={contact.id}>
          <li>{contact.title}</li>
          <button>изменить</button>
          <button onClick={() => removeContact(contact.id)}>удалить</button>
        </div>
      ))}
    </ul>
  );
};

export default ContactList;
