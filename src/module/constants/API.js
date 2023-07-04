const base = 'https://api.encar.com/search/car/list';

const API = {
  search: `${base}/mobile?count=true&q=(And.Hidden.N._.(Or.CarType.Y._.CarType.N.))&inav=%7CMetadata%7CSort`,
  model: `${base}/mobile?count=true&q=(And.Hidden.N._.(C.CarType.Y._.Manufacturer..))&inav=%7CMetadata%7CSort` //.Manufacturer.. 을 .Manufacturer.encodeURIComponent('제조사명'). 으로 치환
};

export default API;