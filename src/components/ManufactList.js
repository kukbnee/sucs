import axios from "axios";
import { useLayoutEffect, useState } from "react";
import '../assets/style/layout.css';
import '../assets/style/manufactList.css'
import { fillZero, getCommaNum } from "../module/utils/common";
import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function ManufactList() {

  let manufactData = useSelector((state)=> state.searchData);
  console.log("전역변수받아온값", manufactData);
  let korManufactList = manufactData[1].Facets[0].Refinements.Nodes[0].Facets;
  let forManufactList = manufactData[1].Facets[1].Refinements.Nodes[0].Facets;
  // const [korManufactList, setKorManufactList] = useState(manufactData[1].Facets[0].Refinements.Nodes[0].Facets);
  // const [forManufactList, setForManufactList] = useState(manufactData[1].Facets[1].Refinements.Nodes[0].Facets);
  const [manufactList, setManufactList] = useState(korManufactList.concat(forManufactList));
  
  let navigate = useNavigate();

  // navigate(PathConstants.MAIN, {
  //   state: {
  //     tabIdx: 21 //진행상태
  //   }
  // });
  return (
    <>
      <Header headerNm="제조사선택" backYn={true} />
      <div className="container">
        <ul>
        {
          manufactList.map((item, idx)=> {
            return (
              <li key={`li_${idx}`}>
                <div className="container-item" onClick={()=> {navigate("/modelList", { state: { manufactNm: item.Value }})}}>
                {/* <span className={`item-text manufact_icon_${fillZero(3,(idx+1)+'')}`}>{item}</span> */}
                  
                  <div className="container-item-manufact-span title">
                    <span className={`item-value manufact_icon_${fillZero(3,(idx+1)+'')}`}>{item.Value}</span>
                  </div>
                  <div className="container-item-manufact-span count">
                    <span className="item-count">{getCommaNum(parseInt(item.Count))}</span>
                  </div>
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

export default ManufactList;