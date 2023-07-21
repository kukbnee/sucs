import { useEffect, useState } from 'react';
import './../assets/style/carList.css';
import { getApiPath } from '../module/common/generateAPI';
import { getCarListData, getSearchData } from '../module/common/sliceStore';
import { useSelector } from 'react-redux';
import { getCommaNum } from '../module/utils/common';

function CarList() {

  let selectedItem = useSelector((state)=> state.selectedItem);
  const IMG_PATH_BASE = "https://ci.encar.com/carpicture";
  const [loadingYn, setLoadingYn] = useState(true);
  const [carListData, setCarListData] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);
  useEffect(()=> {
    getCarListData(
      getApiPath("car_list", selectedItem),
      {},
      (result)=> {
        console.log(result);
        console.log(result.Count, result.SearchResults);
        setTotalCnt(result.Count);
        setCarListData(result.SearchResults);
      },
      ()=> {
        console.log("응답실패");
      }
    ) 
  }, []);
  useEffect(()=> {
    console.log("자동차리스트", carListData);
    if(carListData.length !== 0) setLoadingYn(false);
  }, [carListData]);

  let [transState, setTransState] = useState({});
  const slideImg = (e)=> {
    let modify = -(e.target.value-1)*100;
    setTransState({transform: `translate(${modify}vw)`});
  }
  return (
    <>
    {!loadingYn?<>
    <div className="container-car-list">
      <ul className="car-list">
        {
          carListData.map((data, idx)=> {
            return (
              <li className="car-item">
                <div className="car-item-img" style={transState}>
                  {
                    ["001","002","003","004","007"].map((imgIdx)=> {
                      return (
                        <div className="item-img"><img className="slider" src={`${IMG_PATH_BASE}${data.Photo}${imgIdx}.jpg`}></img></div>
                      )
                    })
                  }
                </div>
                {/* <div className="hot-mark">
                  <span>hotmark1</span>
                  <span>hotmark2</span>
                </div> */}
                {/* {data.Id} */}
                <div className="title">
                  <span className="model-name">{data.Model}</span>
                  <span className="model-grade">{data.Badge} {data.BadgeDetail}</span>
                </div>
                <div className="sub-title">
                  <div style={{display: "inline", textAlign: "left",width: "60%"}}><span className="model-addinfo">{(data.Year+'').substring(2,4)}/{(data.Year+'').substring(4,6)} {getCommaNum(data.Mileage)}km {data.OfficeCityState}</span></div>
                  <div style={{display: "inline", textAlign: "right",width: "35%"}}><span className="model-price">{getCommaNum(data.Price)}만원</span></div>
                </div>
              </li>
            )
          })
        }
        {/* <li className="car-item">
          <div className="car-item-img" style={transState}>
            <div className="item-img"><img className="slider" src="/image/임하윤_1.JPG"></img></div>
            <div className="item-img"><img className="slider" src="/image/임하윤_2.JPG"></img></div>
            <div className="item-img"><img className="slider" src="/image/임하윤_3.JPG"></img></div>
          </div>

          <div className="hot-mark">
            <span>hotmark1</span>
            <span>hotmark2</span>
          </div>
          <div className="title">모델명 + 등급</div>
          <div className="sub-title">연식 주행거리 지역 + 가격</div>
        </li> */}
      </ul>
    </div>
    <div className="slide-btn">
    {
      ["001","002","003","004","007"].map((imgIdx, idx)=> {
        return (
          <button className="slide btn1" onClick={slideImg} value={idx}>{idx}</button>
        )
      })
    }
    </div></>
    :<div>로딩중...</div>
    }
    </>
  )
}

export default CarList;