import { useEffect, useState } from "react";
import { Slider } from "primereact/slider";
import { getCommaNum } from "../module/utils/common";
import { useDispatch, useSelector } from "react-redux";
import { rdSetSelectedDistance } from "../store";
import RangeText from "./RangeText";

function DistanceList() {
  
  let dispatch = useDispatch();
  const selectedItem = useSelector((state)=> state.selectedItem);
  console.log("주행거리 렌더링", selectedItem.distance);
  const initValue = ()=> {
    console.log("전역주행거리", selectedItem.distance);
    let arr = (selectedItem.distance==="")?[0,200000]:selectedItem.distance.split("..", 2);  
    if(arr[0] === "") arr = [0, arr[1]];
    if(arr[1] === "") arr = [arr[0], 200000];
    return arr;
  };
  
  const [value, setValue] = useState(initValue());
  const [step, setStep] = useState(10000);
  const [valueForm, setValueForm] = useState("ALL"); //ALL, MORE, LESS, GAP

  useEffect(()=> {

    console.log("주행거리 변경 감지", selectedItem.distance);
    if(selectedItem.distance === "") {
      setValue(initValue());
      setValueForm("ALL");
    }
  }, [selectedItem]);
  useEffect(()=> {
    
    console.log("주행거리", value);
    if(value[0] === 0 && value[1] < 200000) {
      setValueForm("LESS");
      dispatch(rdSetSelectedDistance(".." + value[1]));
    }else if(value[0] > 0 && value[1] === 200000) {
      setValueForm("MORE");
      dispatch(rdSetSelectedDistance(value[0] + ".."));
    }else if(value[0] > 0 && value[1] < 200000) {
      setValueForm("GAP");
      dispatch(rdSetSelectedDistance(value[0] + ".." + value[1]));
    }else { /* if(value[0] === 0 && value[1] === 200000) { */
      setValueForm("ALL");
      dispatch(rdSetSelectedDistance(""));
    }
    
  }, [value]);

  const handleSlide = (e)=> {
    if(e.value[0] + 1000 < e.value[1]) setValue(e.value);
    
  }

  return (
    <>
      <div className="slide-item">
        <label>
          {/* {
            (value[0] === 0 && value[1] === 200000)&&<b>전체</b>
          }
          {
            (value[0] === 0 && value[1] < 200000)&&<b>{getCommaNum(value[1])}km 이하</b>
            
          }
          {
            (value[0] > 0 && value[1] === 200000)&&<b>{getCommaNum(value[0])}km 이상</b>
          }
          {
            (value[0] > 0 && value[1] < 200000)&&<b>{getCommaNum(value[0])}km ~ {getCommaNum(value[1])}km</b>
          } */}
          <RangeText value={value} valueForm={valueForm} unit={"km"} />
        </label>
      </div>
    
      <div className="card flex justify-content-center">
        
        <Slider step={step} max={200000} value={value} onChange={handleSlide} className="w-14rem" range />
      </div>
    </>
  );
}

export default DistanceList;