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
    // <li>
    //   <span>{contact.title}</span>
    //   <button onClick={() => setIsChangeOpen(true)}>изменить</button>
    //   <button onClick={() => removeContact(contact.id)}>удалить</button>
    // </li>
    <li>
      <div className="w-full">
        <div className="flex cursor-pointer my-1 hover:bg-blue-200 rounded">
          <div className="w-8 flex items-center justify-center h-10 text-center py-1">
            <p className="text-3xl p-0 text-green-500">&bull;</p>
          </div>
          <div className="w-4/5 h-10 py-2 px-1">
            <p className="hover:text-blue-500">{contact.title}</p>
          </div>
          <div className="flex items-center h-10 text-right p-3">
            <button
              onClick={() => removeContact(contact.id)}
              className=" bg-red-300 mr-1  hover:bg-red-600  text-white py-0.5 px-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => setIsChangeOpen(true)}
              className=" bg-blue-300  hover:bg-blue-600  text-white py-0.5 px-1 rounded"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Contact;
