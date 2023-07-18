import { configureStore, createSlice } from "@reduxjs/toolkit";

let searchData = createSlice({
  name: 'searchData',
  initialState: [],
  reducers: {
    rdSetSearchData(state, actions) {
      return actions.payload;
    }
  }
});
let menuPopYn = createSlice({
  name: 'menuPopYn',
  initialState: false,
  reducers: {
    rdSwitchMenuPop(state) {
      return !state;
    }
  }
});
let selectedItem = createSlice({
  name: 'selectedItem',
  initialState: {
    inspection: true, //강제true고정
    record: true,     //강제true고정
    manufact: '',     //제조사
    modelgroup: '',   //모델그룹
    model: '',        //모델
    distance: '',     //주행거리
    price: '',        //가격
    area: []          //지역
  },
  reducers: {
    rdInitSelectedItem(state, actions) {
      state.manufact    = "";
      state.model       = "";
      state.modelgroup  = "";
      state.distance    = "";
      state.price       = "";
      state.area        = [];
    },
    rdSetSelectedManufact(state, actions) {
      state.manufact = actions.payload;
    },
    rdDelSelectedManufact(state, actions) {
      state.manufact = "";
    },
    rdSetSelectedModelgroup(state, actions) {
      state.modelgroup = actions.payload;
    },
    rdDelSelectedModelgroup(state, actions) {
      state.modelgroup = "";
    },
    rdSetSelectedModel(state, actions) {
      state.model = actions.payload;
    },
    rdDelSelectedModel(state, actions) {
      state.model = "";
    },
    rdSetSelectedDistance(state, actions) {
      state.distance = actions.payload;
    },
    rdSetSelectedPrice(state, actions) {
      state.price = actions.payload;
    },
    rdSetSelectedArea(state, actions) {
      state.area = actions.payload;
    },
    rdDelSelectedArea(state, actions) {
      state.area = state.area.filter((val)=> val !== actions.payload);
    }
  }
})

export let { rdSwitchMenuPop } = menuPopYn.actions;

export let { rdSetSearchData } = searchData.actions;

export let { rdInitSelectedItem, rdSetSelectedManufact, rdSetSelectedModel, rdSetSelectedModelgroup, rdSetSelectedDistance, rdSetSelectedPrice, rdSetSelectedArea, rdDelSelectedManufact, rdDelSelectedModel, rdDelSelectedModelgroup, rdDelSelectedArea } = selectedItem.actions;

export default configureStore({
  reducer : {
    menuPopYn: menuPopYn.reducer,
    searchData: searchData.reducer,
    selectedItem: selectedItem.reducer
  }
});