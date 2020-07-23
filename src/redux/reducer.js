import { GET_PROFILE, GET_EXPENSE, ADD_EXPENSE } from "./types";

const initState = {
  user: {},
  expenses: [],
};

export default (state = initState, action) => {
  if (action.type === GET_PROFILE) {
    return { ...state, user: action.payload };
  }
  if (action.type === GET_EXPENSE) {
    return { ...state, expenses: action.payload };
  }
  if (action.type === ADD_EXPENSE) {
    return state;
  }
  return state;
};
