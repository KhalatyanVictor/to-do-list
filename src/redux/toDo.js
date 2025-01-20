import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.items.push({ task: action.payload, highlighted: false });
    },
  },
});

export const selectToDoItems = (state) => state.toDo.items;
export const { addToDo } = toDoSlice.actions;
export default toDoSlice;
