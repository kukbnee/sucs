import { useNavigate } from 'react-router-dom';
import './../assets/style/components.css';
import { useEffect, useState } from 'react';
import API from '../module/constants/API';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSearchData } from '../store';
import Header from './Header';
function Search() {
  const searchList = [
    {
      id: 0,
      name: '제조사',
      link: '/manufactList'
    },
    {
      id: 1,
      name: '주행거리'
    },
    {
      id: 2,
      name: '가격'
    },
    {
      id: 3,
      name: '지역',
      link: '/areaList'
    }
  ];
  let navigate = useNavigate();
  let searchData = useSelector((state)=> state.searchData);
  let dispatch = useDispatch();

  const [searchDataList, setSearchDataList] = useState([]);

  useEffect(()=> {
    if(searchData.length === 0) {
      axios.get(API.search)
      .then((result)=>{
        
        console.log("res데이터", result.data.iNav.Nodes);
        let nodes = result.data.iNav.Nodes;
        let tmpSearchData = [];
        for(let idx=0; idx<nodes.length; idx++) {
          
          tmpSearchData.push(nodes[idx]);
        }
        console.log("템프", tmpSearchData);
        setSearchDataList(tmpSearchData);
      })
      .catch(()=>{
        console.log('실패함')
      });
    }
    
  }, []);

  useEffect(()=> {
    console.log("컨퍼넌트변수", searchDataList);
    if(searchDataList.length > 0) {
      console.log("!!!");
      dispatch(setSearchData(searchDataList));
    }
    console.log("전역변수", searchData);
  }, [searchDataList]);
  return (
    <>
    <Header headerNm="차량검색" backYn={true}/>
    <div className="container">
      <ul>
        {
          searchList.map((data, idx)=> {
            return (
              <li key={`li_${idx}`} onClick={()=> {navigate(data.link)}}>
                <div className="container-item">
                  <span>{data.name}</span>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
    </>
  )
}

export default Search;