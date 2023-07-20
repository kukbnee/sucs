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
    <div style={{overflow: "hidden"}}>
      <div className="container-car-list" style={transState}>
        <div className="item"><img className="slider" src="/image/임하윤_1.JPG"></img></div>
        <div className="item"><img className="slider" src="/image/임하윤_2.JPG"></img></div>
        <div className="item"><img className="slider" src="/image/임하윤_3.JPG"></img></div>
      </div>
    </div>

    <div className="slide-btn">
      <button className="slide btn1" onClick={slideImg} value={1}>1</button>
      <button className="slide btn2" onClick={slideImg} value={2}>2</button>
      <button className="slide btn3" onClick={slideImg} value={3}>3</button>
    </div>
    </>
  )
}

export default CarList;