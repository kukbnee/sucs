import { getCommaNum } from "../module/utils/common";

function RangeText(props) {
  
  return (
    <label>
      <b>
      {props.valueForm === "ALL" && <>전체</>}
      {props.valueForm === "LESS"&& <>{getCommaNum(props.value[1]) + props.unit} 이하</>}
      {props.valueForm === "MORE"&& <>{getCommaNum(props.value[0]) + props.unit} 이상</>}
      {props.valueForm === "GAP" && <>{getCommaNum(props.value[0]) + props.unit} ~ {getCommaNum(props.value[1]) + props.unit}</>} 
      </b>
    </label>
  )
}

export default RangeText;