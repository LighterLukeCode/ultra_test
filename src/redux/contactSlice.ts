import { createSlice } from "@reduxjs/toolkit";
import ContactType from "../types/contact";

type ContactState = {
  items: ContactType[];
  filter: string;
};

const initialState: ContactState = {
  items: [],
  filter: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    plusContact: (state, action) => {
      state.items.push(action.payload);
      console.log(state.items);
    },
    minusContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      state.items = state.items.map(contact =>
        contact.id === action.payload.id ? { ...contact, title: action.payload.title } : contact
      );
    },
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { plusContact, minusContact, editContact, filterValue } = contactSlice.actions;

export default contactSlice.reducer;
