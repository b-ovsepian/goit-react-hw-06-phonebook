import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => {
        return { payload: { id: uuidv4(), name, number } };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter((contact) => contact.id !== payload);
    },
  },
});

const { actions, reducer } = contactsSlice;

export const { addContact, deleteContact } = actions;
export default reducer;
