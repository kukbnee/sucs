import { useEffect, useRef, useState } from 'react';
import './../assets/style/carList.css';
import { getApiPath } from '../module/common/generateAPI';
import { getCarListData, getSearchData } from '../module/common/sliceStore';
import { useSelector } from 'react-redux';
import { getCommaNum } from '../module/utils/common';
import Header from './Header';

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

  let [transState, setTransState] = useState([]);
  const slideImg = (e)=> {
    let modify = -(e.target.value-1)*100;
    let copy = [...transState];
    copy[e.target.name] = {transform: `translate(${modify}vw)`};
    setTransState(copy);
  }
  /*
position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    line-height: 0;
    font-size: 0;
    text-align: center;
    z-index: 1;  
  */
  
  
  const liRef = useRef([]);
  liRef.current = [];
  //li element
  const [liHeight, setLiHeight] = useState([]);
  //이미지 슬라이드 상단 버튼 top위치
  const [topHeight, setTopHeight] = useState([60]);
  //이미지 슬라이드 사이드 버튼 tobe
  //tobe작업
  
  useEffect(()=> {
    if(!loadingYn) {
      console.log("Ref>>", liRef);
      console.log(liRef.current[0]);
      console.log(liRef.current[5]?.offsetHeight);
      // setLiHeight(liRef.current[idx]?.clientHeight);
      let copy = [...liHeight];
      liRef.current.map((data, idx)=> {
        copy[idx] = data;
      });
      setLiHeight(copy);
    }
  }, [loadingYn]);
  useEffect(()=> {
    //setSumHeight(sumHeight + liHeight);
    if(liHeight.length > 0) {
      let copy = [...topHeight];
      liHeight.map((data, idx)=> {
        copy.push(copy[idx] + data.clientHeight);
      });
      setTopHeight(copy);
    }
    
  }, [liHeight]);
  const addToRefs=(el)=>{liRef.current.push(el)}
  return (
    <>
    <Header headerNm="차량검색" backYn={false} />
    {loadingYn?<div>로딩중...</div>:<>
    <div className="container-car-list">
      <ul className="car-list">
        {
          carListData.map((data, idx)=> {
            
            return (
              <li ref={addToRefs} key={`carLi_${idx}`} className="car-item">
                <div className="slide-btn" 
                  style={{
                    position: "absolute",
                    left: "0",
                    //top: (60+liHeight[idx]?.clientHeight*idx)+"px",
                    top: topHeight[idx]+"px",
                    width: "100%",
                    lineHeight: "0",
                    fontSize: "0",
                    textAlign: "center",
                    zIndex: "1"
                  }}>
                {
                  ["001","002","003","004","007"].map((imgIdx, btnIdx)=> {
                    return (
                      <button key={`slideBtn_${btnIdx}`} className="slide btn1" onClick={slideImg} name={idx} value={btnIdx+1}>{btnIdx}</button>
                    )
                  })
                }
                </div>
                <div className="car-item-img" style={transState[idx]}>
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
                  <span className="model-grade"> {data.Badge} {data.BadgeDetail}</span>
                  <span className="li-height">{liHeight[idx]?.clientHeight}</span>
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
    </div></>}
    </>
  )
}

export default CarList;