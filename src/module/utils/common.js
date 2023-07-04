/**
 * 지정한 길이 - '숫자'.length 만큼 좌측에 0을 채워준다.
 * @param {*} width 
 * @param {*} str 
 * @returns 
 */
export const fillZero= (width, str)=> {
  return str.length >= width ? str:new Array(width-str.length+1).join('0')+str;
}

/**
 * 인자로 보내준 숫자에 세자리마다 콤마 추가
 * @param {*} x 
 * @returns 
 */
export const getCommaNum = (x)=> {
  if(!x && x !== 0) return "";
	var resultVal = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return resultVal;
}
