import axios from "axios";
import { API } from "../constants/API";

export const getSearchData = async(url, param, successCB, errorCB)=> {

  console.log("pc api>>", API.search.replace("https", "http").replace("mobile", "general"));
  await axios.get(
    url,
    {
      params: {}, 
      headers: {
        Accept: "application/json, text/javascript, */*; q=0.01",
        Cookie: "WMONID=VKJgb5VPlDe; OAX=3ZfZhGVSLq0AA/Pi; _encar_hostname=https://m.encar.com; _fbp=fb.1.1699884725121.945805962; _gcl_au=1.1.1748916456.1699884725; PCID=16998847253823660043909; _gid=GA1.2.1792530151.1699884726; _ga=GA1.3.257012217.1699884726; _gid=GA1.3.1792530151.1699884726; _ga=GA1.1.257012217.1699884726; _ga_75Z8JTVTJD=GS1.2.1699884725.1.0.1699884725.60.0.0; afUserId=971e2f80-625e-4bca-8444-5e5290da72ca-p; AF_SYNC=1699884728155; cto_bundle=ERx7tl9yNmlueFppRnlNSFdNbUpEVVNFZEp4QSUyRnp5T3FBRnFNek5PQ2ElMkZxYzhvNEx0cDVTN09SYVIyMWtUcDNEc1pwVDlJeGdGb0RuUGwlMkZmRXhJdFJCTjlGeEclMkZpTXJlM3g3eUZMSll2cW1GYTV2JTJCSnNGMU5RbEJrdEo3ZlY2Q0hnWG1QM2pUY1pkUTI5bnBtZXV1eFYwd0V3JTNEJTNE; _gat_UA-56065139-26=1; MOBILESESSIONID=a4HYQ9oaC3W82RfkwSYcEynGcsqts1Yi2BVTUi7AcSFI51b5naYXMFGWdr5sysjY.mono-was6-prod_servlet_encarMobile4; _ga_SX6YBF7MKB=GS1.1.1699884725.1.1.1699884813.0.0.0; _ga_BQ7RK9J6BZ=GS1.1.1699884725.1.1.1699884813.59.0.0"
      },
      credentials: 'include',
      withCredentials:true,
      mode: 'cors'
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
  
};

export const getCarListData = async(url, param, successCB, errorCB)=> {
  await axios.get(
    url,
    {
      params: param, 
      headers: {
        Accept: "application/json, text/javascript, */*; q=0.01",
        AcceptEncoding: "gzip, deflate",
        AcceptLanguage: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    }).then((result)=>{
    
    successCB(result.data);
  })
  .catch((err)=>{
    console.log('실패함');
    errorCB(err);
  });
};
