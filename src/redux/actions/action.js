const API_KEY = process.env.REACT_APP_API_KEY;
// 지역코드와 페이지를 추가해 데이터 받아오기
function getList(id, page) {
  return async (dispatch, getState) => {
    const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=12&pageNo=${page}&MobileOS=etc&MobileApp=test&_type=json&areaCode=${id}&serviceKey=${API_KEY}`;
    const response = await fetch(url);
    const data1 = await response.json();
    const data = data1.response.body;
    // console.log("ddd", data);
    dispatch({ type: "GET_LIST_SUCCESS", payload: { data } });
  };
}

export const action = { getList };
