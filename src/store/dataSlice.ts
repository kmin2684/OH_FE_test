import { createSlice } from "@reduxjs/toolkit";

export interface dataOrganizedState {
    name?: string
    imgUrl?: string
    avgPrice?: string
}

const initialState: {dataOrganized: dataOrganizedState[], searchKey: string} = {
  dataOrganized: [], searchKey: ''
};


const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    replaceDataOrganized(state, action: {payload: dataOrganizedState[], type: string}) {
      state.dataOrganized = action.payload;
    },
    replaceSearchKey(state, action: {payload: string, type: string}) {
      state.searchKey = action.payload.trim()
    }
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;