import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./../assets/style/layout.css"

import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import Header from "./Header";
import { rdSetSelectedArea } from "../store";
import { useNavigate } from "react-router-dom";

function AreaList() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const searchData = useSelector((state)=> state.searchData);
  const selectedItem = useSelector((state)=> state.selectedItem);
  console.log("써치데이터", searchData);
  const [areaList, setAreaList] = useState([...searchData[12].Facets.filter((data)=> data.Value !== "null" && data.Value !== null)]);
  const [selectedAreaList, setSelectedAreaList] = useState(selectedItem.area);
  
  const onCategoryChange = (e) => {
    let _selectedAreaList = [...selectedAreaList];

    if (e.checked)
        _selectedAreaList.push(e.value);
    else
        _selectedAreaList = _selectedAreaList.filter(category => category !== e.value);

    setSelectedAreaList(_selectedAreaList);
  };

  useEffect(()=> {
    console.log("선택된 지역", selectedAreaList);
    
  }, [selectedAreaList]);

  //OfficeCityState
  return (
    <>
      <Header headerNm="지역선택" backYn={true} />
      <div className="container">
        <ul className="area">
          {
            areaList.map((data, idx)=> {
              return (
                <li key={`li_${idx}`}>
                  <div className="flex align-items-center">
                    <Checkbox inputId={data.Value} name="area" value={data.Value} onChange={onCategoryChange} checked={selectedAreaList.some((item) => item === data.Value)} />
                    <label htmlFor={data.Value} className="ml-2">{data.Value}</label>
                  </div>
                </li>
              );
            })
          }
          
        </ul>
        <ul>
          <li>
            <div className="float-bottom-btn">
              <Button label="확인" rounded onClick={()=> {
                dispatch(rdSetSelectedArea(selectedAreaList));
                navigate('/search');
              }}/>
            </div>
          </li>
        </ul>
      </div>
      
    </>
  )
}

export default AreaList;