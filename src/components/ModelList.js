import { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import API from "../module/constants/API";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ModelList(props) {
  let manufactNm = "";
  const { state } = useLocation();
  try {
    manufactNm = state.manufactNm;
  }catch {
    //에러페이지
  }
  const modelApiPath = API.model.replace(".Manufacturer..", `.Manufacturer.${encodeURIComponent(props.manufactNm)}.`);
  const [modelList, setModelList] = useState([]);
  const getModelList = useCallback(async()=> {
    await axios.get(modelApiPath)
      .then((result)=>{
        console.log("res데이터", result.data.iNav.Nodes[1].Facets[0].Refinements.Nodes[0].Facets.filter((data)=> data.IsSelected === true));
        let resData = result.data.iNav.Nodes[1].Facets[0].Refinements.Nodes[0].Facets.filter((data)=> data.IsSelected === true);
        if(resData.length === 1) setModelList([...resData][0].Refinements.Nodes[0].Facets);
      })
      .catch(()=>{
        console.log('실패함')
      });
  }, []);
  useEffect(()=> {
    getModelList();
  }, []);
  useEffect(()=> {
    console.log("필터링한 모델리스트", modelList);
  }, [modelList]);
  return (
    <>
      <Header headerNm="모델선택" backYn={true} />
      <div className="container">
        
        <ul>
        {
          modelList.map((data, idx)=> {
            return (
              <li key={`li_${idx}`}>
                <div className="container-item">
                  <span></span>
                </div>
              </li>
            )
          })
        }
        </ul>
      </div>
    </>
  );
}
export default ModelList;