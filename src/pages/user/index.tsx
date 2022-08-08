import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { v4 as uuidv4 } from "uuid";
import "../../../src/main.css";
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
    <div className="w-full max-w-screen-xl mx-auto p-6">
      <div className="relative rounded overflow-hidden border border-grey-light mb-8 bg-white">
        <div className="border-b border-gray-300 p-4 bg-gray-200 py-8">
          <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-2 py-4">
              <div className="flex-grow">
                <div className="flex justify-center items-center">
                  <input
                    onChange={event => setContact(event.target.value)}
                    value={contact}
                    type="text"
                    placeholder="Invite members"
                    className="my-2 w-full text-sm bg-gray-300 text-gray-600 rounded h-10 p-3 focus:outline-none"
                  />
                  <div className="flex-grow text-right">
                    <button
                      onClick={addContact}
                      className=" bg-blue-300 ml-1  hover:bg-blue-600  text-white py-2 px-4 rounded"
                    >
                      Invite
                    </button>
                  </div>
                </div>
                <h3 className="font-normal px-2 py-3 leading-tight">Contacts</h3>
                <Search />
                <ContactList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
