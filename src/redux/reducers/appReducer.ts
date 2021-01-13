import { ActionTypes } from './../actions/types';
import { TOGGLE_THEME } from '../actionTypes';

export type AppState = {
  theme: string;
};

const initialState: AppState = {
  theme: 'light',
};

export const appReducer = (state = initialState, action: ActionTypes): AppState => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
