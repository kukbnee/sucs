import { useEffect, useState } from "react";
import { Slider } from "primereact/slider";
import { getCommaNum } from "../module/utils/common";

function DistanceList() {
  const [value, setValue] = useState([0,200000]);
  const [step, setStep] = useState(10000);

  useEffect(()=> {
    if(value[0] > value[1]) {
      setValue([value[0], value[0]]);
    }
  }, [value]);

  return (
    <>
      <div className="slide-item">
        <label>
          {
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
          }
        
        </label>
      </div>
    
      <div className="card flex justify-content-center">
        
        <Slider step={step} max={200000} value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
      </div>
      </>
  );
}
export default DistanceList;