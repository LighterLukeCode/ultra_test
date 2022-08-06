import React from "react";
import { useDispatch } from "react-redux";
import ChangeContact from "./ChangeContact";
import { minusContact } from "./redux/contactSlice";

const Contact = ({ contact }) => {
  const [isChangeOpen, setIsChangeOpen] = React.useState(false);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(minusContact(id));
  };
  return isChangeOpen ? (
    <ChangeContact title={contact.title} setIsChangeOpen={setIsChangeOpen} id={contact.id} />
  ) : (
    <li>
      <span>{contact.title}</span>
      <button onClick={() => setIsChangeOpen(true)}>изменить</button>
      <button onClick={() => removeContact(contact.id)}>удалить</button>
    </li>
  );
};

export default Contact;
