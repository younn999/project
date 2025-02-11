let initialState = {
  allData: {},
};

// 불러온 데이터로 변경함
function reducer(state = initialState, action) {
  // console.log("aaa", action);
  switch (action.type) {
    case "GET_LIST_SUCCESS":
      return { ...state, allData: action.payload.data };
    default:
      return { ...state };
  }
}

export default reducer;
