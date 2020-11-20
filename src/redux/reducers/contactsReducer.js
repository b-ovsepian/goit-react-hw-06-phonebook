import { combineReducers } from "redux";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  CHANGE_ERROR,
} from "../constants";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload.idContact);

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

const error = (state = "", { type, payload }) => {
  switch (type) {
    case CHANGE_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
  error,
});
