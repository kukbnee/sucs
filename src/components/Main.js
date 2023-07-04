import { useEffect, useState } from 'react';
import './../main.css';
import 'primeicons/primeicons.css';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { switchMenuPop } from './../store';
function Main() {
  let menuPopYn = useSelector((state)=> state.menuPopYn);
  let dispatch = useDispatch();

  return (
    <>
    {menuPopYn&&
      <Menu />
    }
    {!menuPopYn&&
      <div className="main">
        <i className="pi pi-align-justify" onClick={()=> {dispatch(switchMenuPop());}}></i>
      </div>
    }
    
    
    </>
  );
  
}

export default Main;