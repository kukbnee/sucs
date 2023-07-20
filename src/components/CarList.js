import { useState } from 'react';
import './../assets/style/carList.css';

function CarList() {

  let [transState, setTransState] = useState({});
  const slideImg = (e)=> {
    let modify = -(e.target.value-1)*100;
    setTransState({transform: `translate(${modify}vw)`});
  }
  return (
    <>
    <div className="container-car-list">
      <ul className="car-list">
        <li className="car-item">
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
        </li>
      </ul>
    </div>
    <div className="slide-btn">
      <button className="slide btn1" onClick={slideImg} value={1}>1</button>
      <button className="slide btn2" onClick={slideImg} value={2}>2</button>
      <button className="slide btn3" onClick={slideImg} value={3}>3</button>
      <button className="good btn1"></button>
    </div>
    </>
  )
}

export default CarList;