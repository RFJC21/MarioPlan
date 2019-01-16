import * as actionTypes from "./actions";

export const createProject = project => {
  //with thunk we return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "NInja",
        authorId: 12345,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: actionTypes.CREATE_PROJECT, project });
      })
      .catch(error => {
        dispatch({ type: actionTypes.CREATE_PROJECT_ERROR, error });
      });
  };
};
