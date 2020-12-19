import {
  SET_TEAM_INFO,
  SET_TOURNAMENTS_LIST,
  SET_TOURNAMENT_INFO,
} from "../actionTypes";

const initialState = {
  listTournaments: [],
  tournamentInfo: null,
  teamInfo: null,
};

export const tournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOURNAMENTS_LIST:
      return {
        ...state,
        listTournaments: [...action.payload],
      };
    case SET_TOURNAMENT_INFO:
      return {
        ...state,
        tournamentInfo: action.payload,
      };
    case SET_TEAM_INFO:
      return {
        ...state,
        teamInfo: action.payload,
      };
    default: {
      return state;
    }
  }
};
