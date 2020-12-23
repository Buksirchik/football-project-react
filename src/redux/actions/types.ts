import { Favorite } from "./../reducers/profileReducer";
import {
  TOGGLE_THEME,
  DELETE_FAVORITE_TEAM,
  DELETE_FAVORITE_PLAYER,
  ADD_FAVORITE_TEAM,
  ADD_FAVORITE_PLAYER,
  SET_TEAM_INFO,
  SET_TOURNAMENT_INFO,
} from "./../actionTypes/index";
import {
  TeamInfo,
  TournamentInfo,
  Tournament,
} from "./../reducers/tournamentReducer";
import { SET_TOURNAMENTS_LIST } from "../actionTypes";

interface SetTournamentsListAction {
  type: typeof SET_TOURNAMENTS_LIST;
  payload: Tournament[];
}

interface SetTournamentInfoAction {
  type: typeof SET_TOURNAMENT_INFO;
  payload: TournamentInfo;
}

interface SetTeamInfoAction {
  type: typeof SET_TEAM_INFO;
  payload: TeamInfo;
}

interface AddFavoritePlayerAction {
  type: typeof ADD_FAVORITE_PLAYER;
  payload: Favorite;
}

interface AddFavoriteTeamAction {
  type: typeof ADD_FAVORITE_TEAM;
  payload: Favorite;
}

interface DeleteFavoritePlayerAction {
  type: typeof DELETE_FAVORITE_PLAYER;
  payload: number;
}

interface DeleteFavoriteTeamAction {
  type: typeof DELETE_FAVORITE_TEAM;
  payload: number;
}

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
  payload: string;
}

export type ActionTypes =
  | SetTournamentsListAction
  | SetTournamentInfoAction
  | SetTeamInfoAction
  | AddFavoritePlayerAction
  | AddFavoriteTeamAction
  | DeleteFavoritePlayerAction
  | DeleteFavoriteTeamAction
  | ToggleThemeAction;
