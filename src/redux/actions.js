export const ARR_NAV = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: "ARR_NAV",
      payload: payload,
    });
  } catch (error) {
    console.error(error);
  }
};

export const SESSION_SET = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: "SESSION_SET",
      payload: payload,
    });
  } catch (error) {
    console.error(error);
  }
};
