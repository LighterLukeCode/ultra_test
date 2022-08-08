import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { filterValue } from "./redux/contactSlice";

const Search: React.FC = () => {
  const { filter } = useAppSelector(state => state.contactSlice);
  const dispatch = useAppDispatch();

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterValue(e.target.value));
  };

  return (
    <input
      value={filter}
      onChange={changeSearch}
      type="text"
      placeholder="Search members"
      className="my-2 w-full text-sm bg-gray-300 text-gray-600 rounded h-10 p-3 focus:outline-none"
    />
  );
};

export default Search;
