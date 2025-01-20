import { combineSlices, configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./toDo";
import filterSlice from "./filter";

const rootReducer = combineSlices(toDoSlice, filterSlice);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
