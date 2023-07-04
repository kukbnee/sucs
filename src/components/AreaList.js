import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./../assets/style/components.css"

import { Checkbox } from "primereact/checkbox";
import Header from "./Header";

function AreaList() {
  const searchData = useSelector((state)=> state.searchData);
  const [areaList, setAreaList] = useState([...searchData[12].Facets.filter((data)=> data.Value !== "null" && data.Value !== null)]);
  const [selectedAreaList, setSelectedAreaList] = useState([]);
  
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
        <ul>
          {
            areaList.map((data, idx)=> {
              return (
                <li key={`li_${idx}`}>
                  <div className="container-item">
                    <Checkbox inputId={data.Value} name="area" value={data.Value} onChange={onCategoryChange} checked={selectedAreaList.some((item) => item === data.Value)} />
                    <label htmlFor={data.Value} className="ml-2">
                        {data.Value}
                    </label>
                  </div>
                </li>
              );
            })
          }
          
        </ul>
      </div>
    </>
  )
}

export default AreaList;