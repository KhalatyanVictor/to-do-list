import { createSlice } from "@reduxjs/toolkit";
import { ALL_FILTER_STATE } from "../constants/appConstants";

const initialState = { search: "", buttonFilter: ALL_FILTER_STATE };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setButtonFilter(state, action) {
      state.buttonFilter = action.payload;
    },
  },
});

export const { setSearch, setButtonFilter } = filterSlice.actions;
export default filterSlice;
