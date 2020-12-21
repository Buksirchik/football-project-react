import { TOGGLE_THEME } from "../actionTypes";

const initialState = {
  theme: "light",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
