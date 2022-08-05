import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../../ContactList";

const User = () => {
  const [contact, setContact] = React.useState("");
  const [contactList, setContactList] = React.useState([]);

  const addContact = () => {
    const newContact = { id: uuidv4(), title: contact };
    setContactList([...contactList, newContact]);
    setContact("");
  };

  return (
    <>
      <h1>Список Контактов</h1>
      <div className="invites--form">
        <input
          onChange={event => setContact(event.target.value)}
          value={contact}
          className="invites--form-input"
          type="text"
        />
        <button onClick={addContact} className="invites--form-submit">
          Invite
        </button>
      </div>

      <ContactList contactList={contactList} setContactList={setContactList} />
    </>
  );
};

export default User;
