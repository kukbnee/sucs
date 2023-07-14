import { useCallback, useEffect, useState } from "react";
import { getSearchData } from "../module/common/sliceStore";
import AreaList from "./AreaList";
import { useDispatch, useSelector } from "react-redux";
import { rdSetSearchData } from "../store";
import { API } from "../module/constants/API";

function TestComponent() {

  let searchData = useSelector((state)=> state.searchData);
  let dispatch = useDispatch();

  const [loadingYn, setLoadingYn] = useState(true);
  const [searchDataList, setSearchDataList] = useState([]);
  useEffect(()=> {
    let url = API.search.replace("https", "http").replace("mobile", "general");
    getSearchData(
      url,
      '',
      (result)=> {
        console.log(url + "api응답성공", result);
        setSearchDataList(result);
      },
      ()=> {
        console.log("응답실패");
      }
    );
  }, []);
  

  useEffect(()=> {
    console.log("컨퍼넌트변수", searchDataList);
    if(searchDataList.length > 0) {
      console.log("!!!");
      dispatch(rdSetSearchData(searchDataList));
    }
  }, [searchDataList]);

  useEffect(()=> {
    if(searchData.length !== 0) setLoadingYn(false);
  }, [searchData]);
  return (
    <div className="test-component">
      {
        !loadingYn?
          <AreaList />:
          <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
      }
    </div>
  );
}
export default TestComponent;