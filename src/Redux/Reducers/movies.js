const initialState = {
  movies: [],
  failMsg: "",
};

export default function movies(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_SUCCESS":
      return {
        ...state,
        movies: payload,
      };
    case "GET_FAIL":
      return {
        ...state,
        failMessage: payload,
      };
    default:
      return state;
  }
}
