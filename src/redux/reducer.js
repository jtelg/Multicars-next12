import localStorage from "../utils/localstorage.utils";

const initialState = {};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // #region Carrito
    case "ARR_NAV":
      return {
        ...state,
        arr_nav: action.payload,
      };
    case "SESSION_SET":
      localStorage.setToStorage("session", action.payload);
      return {
        ...state,
        session: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
