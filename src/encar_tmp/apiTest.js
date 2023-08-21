const axios = require("axios");
const apiPathMo = 'https://api.encar.com/search/car/list/mobile?count=true&q=(And.Hidden.N._.(Or.CarType.Y._.CarType.N.))&inav=%7CMetadata%7CSort';
const apiPathPc = 'http://api.encar.com/search/car/list/general?count=true&q=(And.Hidden.N._.(Or.CarType.Y._.CarType.N.))&inav=%7CMetadata%7CSort';
axios.get(apiPathPc).then((res)=> {
  console.log(res.data);
});