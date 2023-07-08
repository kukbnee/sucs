import { useEffect, useState } from "react";
import { Slider } from "primereact/slider";
import { getCommaNum } from "../module/utils/common";

function PriceList() {
  const [value, setValue] = useState([0,10000]);
  const [step, setStep] = useState(100);

  useEffect(()=> {
    if(value[0] > value[1]) {
      setValue([value[0], value[0]]);
    }
    if(value[0] >= 2000 || value[1] >= 2000) {
      setStep(1000);
    }else {
      setStep(100);
    }
  }, [value]);

  return (
    <>
      <div className="slide-item">
        <label>
          {
            (value[0] === 0 && value[1] === 10000)&&<b>전체</b>
          }
          {
            (value[0] === 0 && value[1] < 10000)&&<b>{getCommaNum(value[1])}만원 이하</b>
            
          }
          {
            (value[0] > 0 && value[1] === 10000)&&<b>{getCommaNum(value[0])}만원 이상</b>
          }
          {
            (value[0] > 0 && value[1] < 10000)&&<b>{getCommaNum(value[0])}만원 ~ {getCommaNum(value[1])}만원</b>
          }
        
        </label>
      </div>
    
      <div className="card flex justify-content-center">
        
        <Slider step={step} max={10000} value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
      </div>
      </>
  );
}
export default PriceList;