import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contactsSlice";
import filtersSlice from "./slices/filtersSlice";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
  },
});

export default store;
