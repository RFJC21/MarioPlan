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
      .catch(error => {
        dispatch({ type: actionTypes.LOGIN_ERROR, error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.SIGNOUT_SUCCESS });
      });
  };
};
