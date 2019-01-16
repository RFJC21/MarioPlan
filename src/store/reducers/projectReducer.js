import * as actionTypes from "../actions/actions";

const initialState = {
  projects: [
    { id: "1", title: "help me with my work", content: "bla bla bla" },
    { id: "2", title: "lets play", content: "bla bla bla" },
    { id: "3", title: "go wash the dishes!", content: "bla bla bla" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PROJECT:
      console.log("created project", action.project);
      return state;
    case actionTypes.CREATE_PROJECT_ERROR:
      console.log("create error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
