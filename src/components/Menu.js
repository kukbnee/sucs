import { useEffect, useState } from 'react';
import './../menu.css';
import { useDispatch, useSelector } from 'react-redux';
  import { rdSwitchMenuPop } from '../store';
import Header from './Header';
import { Navigate, useNavigate } from 'react-router-dom';
function Menu(props) {
  //const closeMenu = props.setShowYn;
  let menuPopYn = useSelector((state)=> state.menuPopYn);
  let dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const menuList = [
    {name: '로그인하면 더욱 편리합니다.', code: 'login'},
    {name: '중고차검색' , code: 'search'},
    {name: '사용법'     , code: 'guide'},
  ];

  let navigate = useNavigate();

  let [fade, setFade] = useState('');

  useEffect(()=> {
    console.log(props.showYn);
    setTimeout(()=>{ setFade('menu-end') }, 100);
    return ()=>{
      setFade('')
    }
  }, [props.showYn]);
  
  return (
    <>
    
    <div className={`menu menu-start ${fade}`}>
      <i className="pi pi-times" onClick={()=> {dispatch(rdSwitchMenuPop());}}></i>
      <div className="menu-item"></div>
      <ul>
      
      {
        menuList.map((item, idx)=> {
          return (
            <li key={`li_${idx}`}> 
              <div className="menu-item" onClick={()=> {navigate(`/${item.code}`)}}>
                <span>{item.name}</span>
              </div>
            </li>
          )
        })
      }
      </ul>
    </div>
    </>
  );
}

export default Menu;