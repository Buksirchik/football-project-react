import { API } from "../../api";
import {
  ADD_FAVORITE_TEAM,
  ADD_FAVORITE_PLAYER,
  DELETE_FAVORITE_PLAYER,
  DELETE_FAVORITE_TEAM,
  SET_TEAM_INFO,
  SET_TOURNAMENTS_LIST,
  SET_TOURNAMENT_INFO,
} from "../actionTypes";

export const getTournamentsList = () => (dispatch) => {
  API.getTournaments().then(({ data }) => {
    const { competitions } = data;
    dispatch(setTournamentsList(competitions));
  });
};

export const getTournamentStandings = (id) => (dispatch) => {
  API.getTournamentStandings(id).then(({ data }) => {
    dispatch(setTournamentInfo(data));
  });
};

export const getTeamInfo = (id) => (dispatch) => {
  API.getTeam(id).then(({ data }) => {
    dispatch(setTeamInfo(data));
  });
};

export const setTournamentsList = (payload) => ({
  type: SET_TOURNAMENTS_LIST,
  payload,
});

export const setTournamentInfo = (payload) => ({
  type: SET_TOURNAMENT_INFO,
  payload,
});

export const setTeamInfo = (payload) => ({
  type: SET_TEAM_INFO,
  payload,
});

export const addFavoritePlayer = (payload) => ({
  type: ADD_FAVORITE_PLAYER,
  payload,
});

export const addFavoriteTeam = (payload) => ({
  type: ADD_FAVORITE_TEAM,
  payload,
});

export const deleteFavoritePlayer = (payload) => ({
  type: DELETE_FAVORITE_PLAYER,
  payload,
});

export const deleteFavoriteTeam = (payload) => ({
  type: DELETE_FAVORITE_TEAM,
  payload,
});
