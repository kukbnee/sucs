import { useState } from "react";
import { useNavigate } from "react-router";
import './../assets/style/layout.css';
// import PathConstants from "../constants/PathConstants";
// import AlertModal from "./AlertModal";

function Header(props) {
  const headerNm = props.headerNm;
  const escYn = props.escYn;
  const backYn = props.backYn;
  const GUIDE_MSG = "상품상세 화면으로 이동하시겠습니까?";
    // popup
  // function openPop() {
  //   setShow(true);
  //   document.body.style.overflow = "hidden";
  // }
  // function closePop() {
  //   setShow(false);
  //   document.body.style.overflow = "";
  // }
  // const [show, setShow] = useState(false);
  // const handleShow = ()=> openPop();
  // const handleClose = ()=> closePop();
  const navigate = useNavigate();
  return (
    <header className="header-wrap">
      <div className="header-left" onClick={()=> {navigate(-1)}}>
        {backYn&&
          <i className="pi pi-angle-left"></i>
        }
      </div>
      <div className="header-title">
        <span>{headerNm}</span>
      </div>
      <div className="header-right">
        {escYn&&
          <i className="pi pi-times"></i> 
        }
      </div>
    </header>
  );
}

export default Header;