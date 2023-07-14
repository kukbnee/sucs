import axios from "axios";
import { API } from "../constants/API";

export const getSearchData = async(url, param, successCB, errorCB)=> {

  console.log("pc api>>", API.search.replace("https", "http").replace("mobile", "general"));
  await axios.get(
    API.search,
    {
      params: {}, 
      headers: {
        Accept: "application/json, text/javascript, */*; q=0.01",
        AcceptEncoding: "gzip, deflate",
        AcceptLanguage: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    }).then((result)=>{
    
    console.log("res데이터", result.data.iNav.Nodes);
    let nodes = result.data.iNav.Nodes;
    let tmpSearchData = [];
    for(let idx=0; idx<nodes.length; idx++) {
      
      tmpSearchData.push(nodes[idx]);
    }
    console.log("템프", tmpSearchData);
    //setSearchDataList(tmpSearchData);
    successCB(tmpSearchData);
  })
  .catch(()=>{
    console.log('실패함')
  });
  
}
