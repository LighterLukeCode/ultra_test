import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterValue } from "./redux/contactSlice";

const Search = () => {
  const { filter } = useSelector(state => state.contactSlice);
  const dispatch = useDispatch();

  const changeSearch = e => {
    dispatch(filterValue(e.target.value));
  };

  return <input onChange={changeSearch} value={filter} type="text" />;
};

export default Search;
