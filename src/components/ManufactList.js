import axios from "axios";
import { useLayoutEffect, useState } from "react";
import '../assets/style/components.css';
import { fillZero, getCommaNum } from "../module/utils/common";
import { useSelector } from "react-redux";
import Header from "./Header";

function ManufactList() {

  let manufactData = useSelector((state)=> state.searchData);
  console.log("전역변수받아온값", manufactData);
  const [korManufactList, setKorManufactList] = useState(manufactData[1].Facets[0].Refinements.Nodes[0].Facets);
  const [forManufactList, setForManufactList] = useState(manufactData[1].Facets[1].Refinements.Nodes[0].Facets);
  
  useLayoutEffect(()=> {
    // axios.get(manufactApiPath)
    //   .then((result)=>{
    //     console.log(result.data);
    //     let korManufact = result.data.iNav.Nodes[1].Facets[0].Refinements.Nodes[0].Facets;
    //     let tmpKorManufact = [];
    //     let forManufact = result.data.iNav.Nodes[1].Facets[1].Refinements.Nodes[0].Facets;
    //     let tmpForManufact = [];
    //     for(let idx=0; idx<korManufact.length; idx++) {
    //       console.log(korManufact[idx].Value);
    //       tmpKorManufact.push(korManufact[idx].Value);
    //     }
    //     setKorManufactList(tmpKorManufact);
    //     for(let idx=0; idx<forManufact.length; idx++) {
    //       console.log(forManufact[idx].Value);
    //       tmpForManufact.push(forManufact[idx].Value);
    //     }
    //     setForManufactList(tmpForManufact);
    //   })
    //   .catch(()=>{
    //     console.log('실패함')
    //   })
  }, []);

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
          korManufactList.map((item, idx)=> {
            return (
              <li key={`li_${idx}`}>
                <div className="container-item">
                {/* <span className={`item-text manufact_icon_${fillZero(3,(idx+1)+'')}`}>{item}</span> */}
                  <span className="item-value">{item.Value}</span><span className="item-count">{getCommaNum(parseInt(item.Count))}</span>
                </div>
              </li>
            );
          })
        }
        {
          forManufactList.map((item, idx)=> {
            return (
              <li key={`li_${idx}`}>
                <div className="container-item">
                {/* <span className={`item-text manufact_icon_${fillZero(3,(idx+1)+'')}`}>{item}</span> */}
                <span className="item-value">{item.Value}</span><span className="item-count">{getCommaNum(parseInt(item.Count))}</span>
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