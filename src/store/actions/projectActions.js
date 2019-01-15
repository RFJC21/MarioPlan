import * as actionTypes from "./actions";

export const createProject = project => {
  //with thunk we return a function
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: actionTypes.CREATE_PROJECT, project });
  };
};
