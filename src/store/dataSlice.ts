import { createSlice } from "@reduxjs/toolkit";

export interface dataOrganizedState {
    name: string
    imgUrl: string
    avgPrice: string
}

export interface homesModalState {
  display: boolean,
  id:string
}

const initialState: {dataOrganized: dataOrganizedState[], searchKey: string, homesModal: homesModalState} = {
  dataOrganized: [], 
  searchKey: '',
  homesModal: {display: false, id: ''},
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
    },
    replaceHomesModal(state, action: {payload: homesModalState, type: string}) {
      state.homesModal = action.payload
    }
  
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;