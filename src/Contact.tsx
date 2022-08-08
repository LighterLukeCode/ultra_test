import React from "react";
import { useDispatch } from "react-redux";
import ChangeContact from "./ChangeContact";
import { minusContact } from "./redux/contactSlice";
import ContactType from "./types/contact";

type ContactProps = {
  contact: ContactType;
};

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [isChangeOpen, setIsChangeOpen] = React.useState(false);
  const dispatch = useDispatch();

  const removeContact = (id: string) => {
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
