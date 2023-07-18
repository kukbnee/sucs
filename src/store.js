import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * 검색조건을 세팅하기위한 데이터
 * Serch컴포넌트에서 최초로 api요청해서 가져온다.
 */
let searchData = createSlice({
  name: 'searchData',
  initialState: [],
  reducers: {
    rdSetSearchData(state, actions) {
      return actions.payload;
    }
  }
});

/**
 * 메뉴슬라이스 open/close 여부
 */
let menuPopYn = createSlice({
  name: 'menuPopYn',
  initialState: false,
  reducers: {
    rdSwitchMenuPop(state) {
      return !state;
    }
  }
});

/**
 * 선택한 검색조건 세팅
 */
let selectedItem = createSlice({
  name: 'selectedItem',
  initialState: {
    inspection: true, //성능기록부, 강제true고정
    record: true,     //보험이력, 강제true고정
    manufact: '',     //제조사
    modelgroup: '',   //모델그룹
    model: '',        //모델
    distance: '',     //주행거리
    price: '',        //가격
    area: [],         //지역
    cartype: 'Y'      //국산여부
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