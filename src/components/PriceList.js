import { useEffect, useState } from "react";
import { Slider } from "primereact/slider";
import { getCommaNum } from "../module/utils/common";
import RangeText from "./RangeText";
import { useDispatch, useSelector } from "react-redux";
import { rdSetSelectedPrice } from "../store";

function PriceList() {

  let dispatch = useDispatch();

  const selectedItem = useSelector((state)=> state.selectedItem);

  const initValue = ()=> {
    console.log("전역가격", selectedItem.price);
    let arr = (selectedItem.price==="")?[0,10000]:selectedItem.price.split("..", 2);  
    if(arr[0] === "") arr = [0, arr[1]];
    if(arr[1] === "") arr = [arr[0], 10000];
    return arr;
  };

  const [value, setValue] = useState(initValue());
  const [step, setStep] = useState(100);
  const [valueForm, setValueForm] = useState("ALL"); //ALL, MORE, LESS, GAP

  useEffect(()=> {

    console.log("가격 변경 감지", selectedItem.price);
    if(selectedItem.price === "") {
      setValue(initValue());
      setValueForm("ALL");
    }
  }, [selectedItem]);

  useEffect(()=> {
    console.log("주행거리", value);
    if(value[0] === 0 && value[1] < 10000) {
      setValueForm("LESS");
      dispatch(rdSetSelectedPrice(".." + value[1]));
    }else if(value[0] > 0 && value[1] === 10000) {
      setValueForm("MORE");
      dispatch(rdSetSelectedPrice(value[0] + ".."));
    }else if(value[0] > 0 && value[1] < 10000) {
      setValueForm("GAP");
      dispatch(rdSetSelectedPrice(value[0] + ".." + value[1]));
    }else { /* if(value[0] === 0 && value[1] === 200000) { */
      setValueForm("ALL");
      dispatch(rdSetSelectedPrice(""));
    }
    
  }, [value]);

  const handleSlide = (val)=> {
    if(val[0] + 100 < val[1]) setValue(val);
    
  }

  // useEffect(()=> {
  //   if(value[0] > value[1]) {
  //     setValue([value[0], value[0]]);
  //   }
  //   if(value[0] >= 2000 || value[1] >= 2000) {
  //     setStep(1000);
  //   }else {
  //     setStep(100);
  //   }
  // }, [value]);

  return (
    <>
      <div className="slide-item">
        <label>
          <RangeText value={value} valueForm={valueForm} unit={"만원"} />
        </label>
      </div>
    
      <div className="card flex justify-content-center">
        
        <Slider step={step} max={10000} value={value} onChange={(e) => handleSlide(e.value)} className="w-14rem" range />
      </div>
      </>
  );
}
export default PriceList;