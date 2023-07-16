import { useEffect, useState } from "react";
import { Slider } from "primereact/slider";
import { getCommaNum } from "../module/utils/common";
import { useDispatch } from "react-redux";
import { rdSetSelectedDistance } from "../store";

function DistanceList() {

  let dispatch = useDispatch();

  const [value, setValue] = useState([0,200000]);
  const [step, setStep] = useState(10000);
  const [valueForm, setValueForm] = useState("ALL"); //ALL, MORE, LESS, GAP

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

  const handleSlide = (val)=> {
    if(val[0] + 1000 < val[1]) setValue(val);
    
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
          <RangeText value={value} valueForm={valueForm} />
        </label>
      </div>
    
      <div className="card flex justify-content-center">
        
        <Slider step={step} max={200000} value={value} onChange={(e) => handleSlide(e.value)} className="w-14rem" range />
      </div>
    </>
  );
}

function RangeText(props) {
  return (
    <label>
      <b>
      {props.valueForm === "ALL" && <>전체</>}
      {props.valueForm === "LESS"&& <>{getCommaNum(props.value[1])}km 이하</>}
      {props.valueForm === "MORE"&& <>{getCommaNum(props.value[0])}km 이상</>}
      {props.valueForm === "GAP" && <>{getCommaNum(props.value[0])}km ~ {getCommaNum(props.value[1])}km</>} 
      </b>
    </label>
  )
}
export default DistanceList;