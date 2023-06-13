import api from "../Api/Api";

export const getMovies = () => async (dispatch) => {
  try {
    const res = await api.get("/movies");
    if (res) {
      dispatch({
        type: "GET_SUCCESS",
        payload: res.data && res.data.movies,
      });
      console.log(res);
    }
  } catch (err) {
    dispatch({
      type: "GET_FAIL",
      payload: err.response.data,
    });
    console.log(err);
  }
};
