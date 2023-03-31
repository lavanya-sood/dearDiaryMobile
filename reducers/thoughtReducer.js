// import { ADD_THOUGHT } from "../actions/ActionTypes.js";

const INITIAL_STATE = [];
const thoughtReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_THOUGHT":
      return [...state.todos, action.payload];
    default:
      return state;
  }
};

export default thoughtReducer;
