import { createSlice } from "@reduxjs/toolkit";

export interface homesModalType {
  display: boolean
  communityId:string
  communityName: string
}

const initialState: {searchKey: string, homesModal: homesModalType} = {
  searchKey: '',
  homesModal: {display: false, communityId: '', communityName: ''},
};


const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    replaceSearchKey(state, action: {payload: string, type: string}) {
      state.searchKey = action.payload.trim()
    },
    replaceHomesModal(state, action: {payload: homesModalType, type: string}) {
      state.homesModal = action.payload
    }
  
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;