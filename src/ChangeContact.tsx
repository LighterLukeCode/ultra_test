import React from "react";
import { useDispatch } from "react-redux";
import { editContact } from "./redux/contactSlice";

type ChangeContactProps = {
  id: string;
  setIsChangeOpen: (isOpen: boolean) => void;
  title: string;
};

const ChangeContact: React.FC<ChangeContactProps> = ({ id, setIsChangeOpen, title }) => {
  const [changeTitle, setChangeTitle] = React.useState(title);
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editContact({ id, title: changeTitle }));
    setIsChangeOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-center items-center">
        <input
          value={changeTitle}
          onChange={event => setChangeTitle(event.target.value)}
          type="text"
          placeholder="Invite members"
          className="my-2 w-full text-sm bg-gray-300 text-gray-600 rounded h-10 p-3 focus:outline-none"
        />
        <div className="flex-grow text-right">
          <button className=" bg-green-300 ml-1  hover:bg-green-600  text-white py-2 px-4 rounded">Change</button>
        </div>
      </div>
    </form>
  );
};

export default ChangeContact;
