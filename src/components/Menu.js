import { useState } from 'react';
import './../menu.css';
import { ListBox } from 'primereact/listbox';
function Menu(props) {
  const closeMenu = props.setShowYn;
  const [selectedMenu, setSelectedMenu] = useState(null);
  const menuList = [
    {name: '로그인하면 더욱 편리합니다.', code: 'login'},
    {name: '중고차검색' , code: 'search'},
    {name: '사용법'     , code: 'guide'},
  ];

  return (
    <div className="menu">
      <i className="pi pi-times" onClick={()=> {closeMenu(false)}}></i>
      <ListBox value={selectedMenu} onChange={(e) => setSelectedMenu(e.value)} options={menuList} optionLabel="name" className="w-full md:w-14rem"/>
    </div>
  );
  
}

export default Menu;