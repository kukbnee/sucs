import { useNavigate } from 'react-router-dom';
import './../assets/style/layout.css';
import './../assets/style/components.css';
import { useCallback, useEffect, useState } from 'react';
import { API } from '../module/constants/API';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { rdSetSearchData } from '../store';
import Header from './Header';
import DistanceList from './DistanceList';
import PriceList from './PriceList';
import ItemTag from './ItemTag';
import { getSearchData } from '../module/common/sliceStore';
function Search() {
  const searchList = [
    {
      id: 0,
      name: '제조사',
      link: '/manufactList'
    },
    {
      id: 1,
      name: '주행거리',
      link: '/distanceList'
    },
    {
      id: 2,
      name: '가격',
      link: '/priceList'
    },
    {
      id: 3,
      name: '지역',
      link: '/areaList'
    }
  ];
  let navigate = useNavigate();
  let searchData = useSelector((state)=> state.searchData);
  let selectedItem = useSelector((state)=> state.selectedItem);
  let dispatch = useDispatch();

  const [searchDataList, setSearchDataList] = useState([]);
/*
  let getSearchData = useCallback(async()=> {
    console.log("전역변수 searchData", searchData);
    console.log("전역변수 selectedItem", selectedItem);
    if(searchData.length === 0) {
      
      await axios.get(API.search)
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
  });
*/
  useEffect(()=> {
    // getSearchData();
    getSearchData(
      API.search.replace("https", "http").replace("mobile", "general"),
      '',
      (result)=> {
        console.log(API.search + "api응답성공", result);
        setSearchDataList(result);
      },
      ()=> {
        console.log("응답실패");
      }
    );
  }, []);

  useEffect(()=> {
    console.log("컨퍼넌트변수", searchDataList);
    if(searchDataList.length > 0) {
      console.log("!!!");
      dispatch(rdSetSearchData(searchDataList));
    }
    console.log("전역변수", searchData);
  }, [searchDataList]);
  return (
    <>
    <Header headerNm="차량검색" backYn={true}/>
    <div className="container">
      <div className="selected-item-list">
        <ItemTag />
      </div>
      <ul className="search-menu">
        {
          searchList.map((data, idx)=> {
            return (
              <>
              <li key={`li_${idx}`} id={`li_${idx}`} onClick={()=> {(data.id === 0 || data.id === 3)&&navigate(data.link)}} >
                <div className="container-item" style={{/*{height: "90px"}*/}}>
                  <div className="container-item-span">
                    <span>{data.name}</span>
                  </div>
                  
                  {
                    (data.id === 0 || data.id === 3)&&
                      <div className="container-item-btn">
                        <i className="pi pi-angle-right"></i>
                      </div>
                  }
                </div>
              </li>
              {
                (data.id === 1)&&
                  <li key={`li_${idx}_slide`} className="li-slide">
                    <div className="container-item-service">
                      <DistanceList />
                    </div>
                  </li>
              }
              {
                (data.id === 2)&&
                  <li key={`li_${idx}_slide`} className="li-slide">
                    <div className="container-item-service">
                      <PriceList />
                    </div>
                  </li>
              }
              </>
            );
          })
        }
      </ul>
      
    </div>
    
    </>
  )
}

export default Search;