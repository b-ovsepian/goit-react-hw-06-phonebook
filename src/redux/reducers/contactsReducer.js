import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  CHANGE_ERROR,
} from "../constants";

const items = createReducer([], {
  [ADD_CONTACT]: (state, { payload }) => [...state, payload],
  [DELETE_CONTACT]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [CHANGE_FILTER]: (state, { payload }) => payload,
});

const error = createReducer("", {
  [CHANGE_ERROR]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  error,
});
