import { configureStore, createSlice } from "@reduxjs/toolkit";

let searchData = createSlice({
  name: 'searchData',
  initialState: [],
  reducers: {
    setSearchData(state, actions) {
      return actions.payload;
    }
  }
});
let menuPopYn = createSlice({
  name: 'menuPopYn',
  initialState: false,
  reducers: {
    switchMenuPop(state) {
      return !state;
    }
  }
});

export let { switchMenuPop } = menuPopYn.actions;

export let { setSearchData } = searchData.actions;

export default configureStore({
  reducer : {
    menuPopYn: menuPopYn.reducer,
    searchData: searchData.reducer
  }
});