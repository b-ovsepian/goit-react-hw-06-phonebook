import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  CHANGE_ERROR,
} from "../constants";

const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const deleteContact = createAction(DELETE_CONTACT);
const changeFilter = createAction(CHANGE_FILTER);
const changeError = createAction(CHANGE_ERROR);

export default {
  addContact,
  deleteContact,
  changeFilter,
  changeError,
};
