const base = 'https://api.encar.com/search/car/list';
const REPLACE = {
  Manufacturer: '@Manufacturer',
  CarType: '@CarType',
  ModelGroup: '@ModelGroup'
};
const API = {
  search: `${base}/mobile?count=true&q=(And.Hidden.N._.(Or.CarType.Y._.CarType.N.))&inav=%7CMetadata%7CSort`,
  model: `${base}/mobile?count=true&q=(And.Hidden.N._.(C.CarType.${REPLACE.CarType}._.Manufacturer.${REPLACE.Manufacturer}.))&inav=%7CMetadata%7CSort`, //.Manufacturer.. 을 .Manufacturer.encodeURIComponent('제조사명'). 으로 치환
  model_group: `${base}/mobile?count=true&q=(And.Hidden.N._.(C.CarType.${REPLACE.CarType}._.(C.Manufacturer.${REPLACE.Manufacturer}._.ModelGroup.${REPLACE.ModelGroup}.)))&inav=%7CMetadata%7CSort`
  
};

export {API, REPLACE};