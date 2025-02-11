const API_KEY = process.env.REACT_APP_API_KEY;

// 내비게이션의 지역명과 메인의 카드를 클릭했을 때 1페이지부터 볼 수 있도록 pageNo=1로 고정함
function getFirst(id) {
  return async (dispatch) => {
    const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=12&pageNo=1&MobileOS=etc&MobileApp=test&_type=json&areaCode=${id}&serviceKey=${API_KEY}`;
    const response = await fetch(url);
    const data1 = await response.json();
    const data = data1.response.body;
    // console.log("ddd", data);
    dispatch({ type: "GET_LIST_SUCCESS", payload: { data } });
  };
}

// 지역코드와 페이지를 넘겨받아 데이터를 받아오는 api
function getList(id, page) {
  return async (dispatch) => {
    const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=12&pageNo=${page}&MobileOS=etc&MobileApp=test&_type=json&areaCode=${id}&serviceKey=${API_KEY}`;
    const response = await fetch(url);
    const data1 = await response.json();
    const data = data1.response.body;
    // console.log("ddd", data);
    dispatch({ type: "GET_LIST_SUCCESS", payload: { data } });
  };
}

export const action = { getFirst, getList };
