import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { filterValue } from "./redux/contactSlice";

const Search: React.FC = () => {
  const { filter } = useAppSelector(state => state.contactSlice);
  const dispatch = useAppDispatch();

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterValue(e.target.value));
  };

  return <input onChange={changeSearch} value={filter} type="text" />;
};

export default Search;
