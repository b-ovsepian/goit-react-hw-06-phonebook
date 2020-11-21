import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsSlice from "./slice/contactsSlice";
import errorSlice from "./slice/errorSlice";
import filterSlice from "./slice/filterSlice";

const rootReduce = {
  contacts: combineReducers({
    items: contactsSlice,
    filter: filterSlice,
    error: errorSlice,
  }),
};

const store = configureStore({
  reducer: rootReduce,
});

export default store;
