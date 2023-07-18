import { Button } from 'primereact/button';
import './../assets/style/components.css';
import { useDispatch } from 'react-redux';
import { rdInitSelectedItem } from '../store';
function ItemButton(props) {

  return (
    <div className="card flex flex-wrap align-items-center justify-content-center gap-3"
      style={{padding: "10px"}}>
      <ul className="bottom-button-set">
        <li style={{border: "0"}}><Button label="검색조건 초기화" severity="secondary" rounded  onClick={props.initCallback}/></li>
        <li style={{border: "0"}}><Button label="검색" rounded onClick={props.searchCallback} /></li>
      </ul>
    </div>
  )
}

export default ItemButton;