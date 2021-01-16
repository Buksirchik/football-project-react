import { ActionTypes } from './../actions/types';
import { TOGGLE_THEME, IS_FETCHING } from '../actionTypes';

export type AppState = {
  theme: string;
  isFetching: boolean;
};

const initialState: AppState = {
  theme: 'light',
  isFetching: false,
};

export const appReducer = (state = initialState, action: ActionTypes): AppState => {
  switch (action.type) {
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    }
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
