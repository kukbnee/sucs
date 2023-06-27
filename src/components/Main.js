import { useEffect, useState } from 'react';
import './../main.css';
import 'primeicons/primeicons.css';
import Menu from './Menu';
function Main() {
  const [showYn, setShowYn] = useState(false);

  useEffect(()=> {
    if(showYn) {

    }
  }, [showYn]);

  return (
    <>
    {showYn&&
      <Menu setShowYn={setShowYn}/>
    }
    <div className="main">
      <i className="pi pi-align-justify" onClick={()=> {setShowYn(!showYn)}}></i>
      
    </div>
    
    </>
  );
  
}

export default Main;