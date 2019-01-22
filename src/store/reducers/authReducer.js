import * as actionTypes from "../actions/actions";

const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authError: actionTypes.LOGIN_ERROR
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case actionTypes.SIGNOUT_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default authReducer;
