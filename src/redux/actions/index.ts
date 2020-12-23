import { Favorite } from "./../reducers/profileReducer";
import { ActionTypes } from "./types";
import { API } from "../../api";
import {
  ADD_FAVORITE_TEAM,
  ADD_FAVORITE_PLAYER,
  DELETE_FAVORITE_PLAYER,
  DELETE_FAVORITE_TEAM,
  SET_TEAM_INFO,
  SET_TOURNAMENTS_LIST,
  SET_TOURNAMENT_INFO,
  TOGGLE_THEME,
} from "../actionTypes";
import {
  TeamInfo,
  TournamentInfo,
  Tournament,
} from "../reducers/tournamentReducer";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../reducers";

export const getTournamentsList = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => (dispatch) => {
  API.getTournaments()?.then(({ data }) => {
    const { competitions } = data;
    dispatch(setTournamentsList(competitions));
  });
};

export const getTournamentStandings = (
  id: number
): ThunkAction<void, RootState, null, Action<string>> => (dispatch) => {
  console.log(typeof id)
  API.getTournamentStandings(id)?.then(({ data }) => {
    dispatch(setTournamentInfo(data));
  });
};

export const getTeamInfo = (
  id: number
): ThunkAction<void, RootState, null, Action<string>> => (dispatch) => {
  API.getTeam(id)?.then(({ data }) => {
    dispatch(setTeamInfo(data));
  });
};

export const setTournamentsList = (payload: Tournament[]): ActionTypes => ({
  type: SET_TOURNAMENTS_LIST,
  payload,
});

export const setTournamentInfo = (payload: TournamentInfo): ActionTypes => ({
  type: SET_TOURNAMENT_INFO,
  payload,
});

export const setTeamInfo = (payload: TeamInfo): ActionTypes => ({
  type: SET_TEAM_INFO,
  payload,
});

export const addFavoritePlayer = (payload: Favorite): ActionTypes => ({
  type: ADD_FAVORITE_PLAYER,
  payload,
});

export const addFavoriteTeam = (payload: Favorite): ActionTypes => ({
  type: ADD_FAVORITE_TEAM,
  payload,
});

export const deleteFavoritePlayer = (payload: number): ActionTypes => ({
  type: DELETE_FAVORITE_PLAYER,
  payload,
});

export const deleteFavoriteTeam = (payload: number): ActionTypes => ({
  type: DELETE_FAVORITE_TEAM,
  payload,
});

export const toggleTheme = (payload: string): ActionTypes => ({
  type: TOGGLE_THEME,
  payload,
});
