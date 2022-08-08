import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { v4 as uuidv4 } from "uuid";

import ContactList from "../../ContactList";
import { plusContact } from "../../redux/contactSlice";
import Search from "../../Search";

const User: React.FC = () => {
  const [contact, setContact] = React.useState("");

  const dispatch = useAppDispatch();

  const addContact = () => {
    dispatch(plusContact({ id: uuidv4(), title: contact }));
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
      <Search />
      <ContactList />
    </>
  );
};

export default User;
