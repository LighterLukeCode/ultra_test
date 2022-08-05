import React from "react";

const ChangeContact = ({ contactList, setContactList, id, setIsChangeOpen }) => {
  const [changeTitle, setChangeTitle] = React.useState("");

  const onSubmit = event => {
    event.preventDefault();
    setContactList(contactList => [
      ...contactList.map(contact => {
        // if (contact.id === id) return { ...contact, title: changeTitle } else {return contact} ;
        return contact.id === id ? { ...contact, title: changeTitle } : contact;
      }),
    ]);
    setIsChangeOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={event => setChangeTitle(event.target.value)}
        value={changeTitle}
        placeholder="Введите новое имя..."
      />
      <button type="submit">подтвердить</button>
    </form>
  );
};

export default ChangeContact;
