import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      console.log(action.payload);
    },
    editContact: (state, action) => {
      state.items = state.items.map(contact =>
        contact.id === action.payload.id ? { ...contact, title: action.payload.title } : contact
      );
      console.log(action.payload);
    },
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { plusContact, minusContact, editContact, filterValue } = contactSlice.actions;

export default contactSlice.reducer;
