import React from "react";

const User = () => {
  const [contact, setContact] = React.useState("");
  const [contactList, setContactList] = React.useState([]);

  const addContact = () => {
    setContactList([...contactList, contact]);
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
      <ul>
        {contactList.map((contact, i) => (
          <>
            <li key={i}>{contact}</li>
            <button>изменить</button>
            <button>удалить</button>
          </>
        ))}
      </ul>
    </>
  );
};

export default User;
