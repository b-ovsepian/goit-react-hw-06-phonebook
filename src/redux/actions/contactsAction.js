import { v4 as uuidv4 } from "uuid";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  CHANGE_ERROR,
} from "../constants";

const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

const deleteContact = (idContact) => ({
  type: DELETE_CONTACT,
  payload: { idContact },
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: { filter },
});

const changeError = (error) => ({
  type: CHANGE_ERROR,
  payload: { error },
});

export default {
  addContact,
  deleteContact,
  changeFilter,
  changeError,
};
