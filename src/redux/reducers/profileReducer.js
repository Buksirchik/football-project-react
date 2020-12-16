import {
  ADD_FAVORITE_PLAYER,
  ADD_FAVORITE_TEAM,
  DELETE_FAVORITE_PLAYER,
  DELETE_FAVORITE_TEAM,
} from "../actionTypes";

const initialState = {
  listFavoriteTeams: {},
  listFavoritePlayers: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_PLAYER:
      const playerId = action.payload.id;
      const favoritePlayers = {
        ...state.listFavoritePlayers,
        [playerId]: action.payload,
      };
      return {
        ...state,
        listFavoritePlayers: favoritePlayers,
      };
    case ADD_FAVORITE_TEAM:
      const teamId = action.payload.id;
      const favoriteTeams = {
        ...state.listFavoriteTeams,
        [teamId]: action.payload,
      };
      return {
        ...state,
        listFavoriteTeams: favoriteTeams,
      };
    case DELETE_FAVORITE_PLAYER:
      const players = { ...state.listFavoritePlayers };
      delete players[action.payload];
      return {
        ...state,
        listFavoritePlayers: players,
      };
    case DELETE_FAVORITE_TEAM:
      const teams = { ...state.listFavoriteTeams };
      delete teams[action.payload];
      return {
        ...state,
        listFavoriteTeams: teams,
      };
    default:
      return state;
  }
};
