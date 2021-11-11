import { createSlice } from "@reduxjs/toolkit";

export interface dataOrganizedType {
    name: string
    imgUrl: string
    avgPrice: string
}

export interface homesModalType {
  display: boolean,
  communityId:string
}

const initialState: {dataOrganized: dataOrganizedType[], searchKey: string, homesModal: homesModalType} = {
  dataOrganized: [], 
  searchKey: '',
  homesModal: {display: false, communityId: ''},
};


const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    replaceDataOrganized(state, action: {payload: dataOrganizedType[], type: string}) {
      state.dataOrganized = action.payload;
    },
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