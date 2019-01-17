import * as actionTypes from "./actions";

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    //initialize our firebase instance
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS });
      })
      .catch(erroR => {
        dispatch({ type: actionTypes.LOGIN_ERROR, error });
      });
  };
};
