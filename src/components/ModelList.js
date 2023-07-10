import { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import { API, REPLACE } from "../module/constants/API";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ModelList(props) {
  let manufactNm = "";
  let carType = "";
  const { state } = useLocation();
  try {
    manufactNm = state.manufactNm;
    carType = state.carType;
  }catch {
    //에러페이지
  }
  const modelApiPath = API.model
    .replace(REPLACE.CarType, `${carType}`)
    .replace(REPLACE.Manufacturer, `${encodeURIComponent(manufactNm)}`);
    
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

  const [selectedModel, setSelectedModel] = useState(''); 
  useEffect(()=> {
    
  }, [selectedModel]);
  return (
    <>
      <Header headerNm="모델선택" backYn={true} />
      <div className="container">
        
        <ul>
        {
          modelList.map((data, idx)=> {
            return (
              <li key={`li_${idx}`} 
                onClick={(()=> {
                  if(data.Value === selectedModel) {
                    setSelectedModel('');
                  }else {
                    setSelectedModel(data.Value);
                  }
                })}
              >
                <div className="container-item">
                  <span>{data.Value}</span>
                </div>
                {
                  (selectedModel === data.Value)&&
                    <ModelGroupList carType={carType} manufactNm={manufactNm} selectedModel={selectedModel} />
                }
              </li>
            )
          })
        }
        </ul>
      </div>
    </>
  );
}

function ModelGroupList(props) {

  const modelGruopApiPath = API.model_group
    .replace(REPLACE.CarType, `${props.carType}`)
    .replace(REPLACE.Manufacturer, `${encodeURIComponent(props.manufactNm)}`)
    .replace(REPLACE.ModelGroup, `${encodeURIComponent(props.selectedModel)}`);
    
  const [modelGroupList, setModelGroupList] = useState([]);
  const getModelGroupList = useCallback(async()=> {
    await axios.get(modelGruopApiPath)
      .then((result)=>{
        
        //.Refinements.Nodes[0].Facets.filter((data)=> data.IsSelected === true));
        let resData = result.data.iNav.Nodes[1].Facets[0].Refinements.Nodes[0].Facets.filter((data)=> data.IsSelected === true);
        console.log("모델", resData);
        let selectedModelGroup = resData[0].Refinements.Nodes[0].Facets.filter((data)=> data.IsSelected === true);
        console.log("모델그룹", selectedModelGroup);
        if(selectedModelGroup.length === 1) setModelGroupList([...selectedModelGroup][0].Refinements.Nodes[0].Facets);
      })
      .catch(()=>{
        console.log('실패함')
      });
  }, []);
  useEffect(()=> {
    getModelGroupList();
  }, []);

  return (
    <ul>
    {
      modelGroupList.map((data, idx)=> {
        return (
          <li>
            <span>{data.Value}</span>
          </li>
        )
      })
    }
    </ul>
  )
}
export default ModelList;