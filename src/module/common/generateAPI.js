/**
 * 엔카API 형식으로 맞춰주는 함수
 * @param {무엇을 가져오는 api인지} type 
 * @param {선택된 검색조건} selectedItem 
 * @returns 
 */
export const getApiPath = (type, selectedItem)=> {
  //todo:selectedItem값에 따른 api path 생성
  /*
    encar api 와꾸분석

    전체검색 :
    /mobile?count=true
    &q=(And
      .Hidden.N._
      .(Or.CarType.Y._.CarType.N.)_
      .Condition.Record._
      .Condition.Inspection.
    )
    &sr=|ModifiedDate|0|200&inav=|Metadata|Sort

    모든조건 :
    /mobile?count=true
    &q=(And
      .Mileage.range(50000..130000)._
      .Price.range(800..1600)._
      .Hidden.N._
      .(
        C.CarType.Y._
        .(
          C.Manufacturer.현대._
          .(
            C.ModelGroup.쏘나타._
            .Model.LF+쏘나타.
          )
        )
      )_
      .(
        Or
        .OfficeCityState.서울._
        .OfficeCityState.경기._
        .OfficeCityState.인천.
      )_
      .Condition.Inspection._
      .Condition.Record.
    )
    &sr=|ModifiedDate|0|200&inav=|Metadata|Sort
  */
  console.log("getApiPath", selectedItem);          
  
  let param = {
    Mileage: "",
    Price: "",
    CarType: "",
    OfficeCityState: ""
  };
  
  if(type === "car_list") {
    if(!!selectedItem.distance) {
      param.Mileage = `.Mileage.range(${selectedItem.distance})._`;
    }
    if(!!selectedItem.price) {
      param.Price = `.Price.range(${selectedItem.price})._`;
    }
    if(selectedItem.area.length > 0) {
      let addStr = ".(Or";
      selectedItem.area.map((data)=> {
        addStr = addStr + ".OfficeCityState." + data + "._";
      });
      param.OfficeCityState = addStr.substring(0, addStr.length-1) + ")_";
    }
    if(!!selectedItem.manufact && !!selectedItem.model && !!selectedItem.modelgroup) {
      param.CarType = `
        .(C.CarType.${selectedItem.cartype}._
          .(C.Manufacturer.${encodeStr(selectedItem.manufact)}._
            .(C.ModelGroup.${encodeStr(selectedItem.model)}._.Model.${encodeStr(selectedItem.modelgroup)}.)
          )
        )_`;
    }else if(!!selectedItem.manufact && !!selectedItem.model && !selectedItem.modelgroup) {
      param.CarType = `
        .(C.CarType.${selectedItem.cartype}._
          .(C.Manufacturer.${encodeStr(selectedItem.manufact)}._.ModelGroup.${encodeStr(selectedItem.model)}.)
        )_`;
    }else if(!!selectedItem.manufact && !selectedItem.model) {
      param.CarType = `.(C.CarType.${selectedItem.cartype}._.Manufacturer.${encodeStr(selectedItem.manufact)}.)_`;
    }else {
      param.CarType = `.(Or.CarType.Y._.CarType.N.)`;
    }

    let path = `https://api.encar.com/search/car/list/mobile
    ?count=true
    &q=(And
      .Hidden.N._
      ` + param.Mileage + `
      ` + param.Price + `
      ` + param.CarType + `
      ` + param.OfficeCityState + `
      .Condition.Inspection._
      .Condition.Record.
    )
    &sr=${encodeURIComponent('|ModifiedDate|0|200')}
    &inav=${encodeURIComponent('|Metadata|Sort')}`;
    //가독성을 위해 path문자열을 ``로 정의해서 생긴 공백을 제거하고 리턴한다.
    return path.replace(/(\s*)/g, "");

  }

}

const encodeStr = (str)=> {
  let strEnc = "";
  let arrDec = str.split(" ");
  if(arrDec.length === 1) {
    return encodeURIComponent(str);
  }else {
    arrDec.map((data)=> {
      strEnc = strEnc + encodeURIComponent(data) + "+";
    });
    return strEnc.substring(0, strEnc.length-1);
  }
}