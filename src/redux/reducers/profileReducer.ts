import { ActionTypes } from './../actions/types';
import { ADD_FAVORITE_PLAYER, ADD_FAVORITE_TEAM, DELETE_FAVORITE_PLAYER, DELETE_FAVORITE_TEAM } from '../actionTypes';
import { FavoriteItem } from '../../types';

export type ProfileState = {
  listFavoriteTeams: FavoriteItem;
  listFavoritePlayers: FavoriteItem;
};

const initialState: ProfileState = {
  listFavoriteTeams: {},
  listFavoritePlayers: {},
};

export const profileReducer = (state = initialState, action: ActionTypes): ProfileState => {
  switch (action.type) {
    case ADD_FAVORITE_PLAYER: {
      const playerId = action.payload.id;
      const favoritePlayers = {
        ...state.listFavoritePlayers,
        [playerId]: action.payload,
      };
      return {
        ...state,
        listFavoritePlayers: favoritePlayers,
      };
    }
    case ADD_FAVORITE_TEAM: {
      const teamId = action.payload.id;
      const favoriteTeams = {
        ...state.listFavoriteTeams,
        [teamId]: action.payload,
      };
      return {
        ...state,
        listFavoriteTeams: favoriteTeams,
      };
    }
    case DELETE_FAVORITE_PLAYER: {
      const favoritePlayers = { ...state.listFavoritePlayers };
      delete favoritePlayers[action.payload];
      return {
        ...state,
        listFavoritePlayers: favoritePlayers,
      };
    }
    case DELETE_FAVORITE_TEAM: {
      const favoriteTeams = { ...state.listFavoriteTeams };
      delete favoriteTeams[action.payload];
      return {
        ...state,
        listFavoriteTeams: favoriteTeams,
      };
    }
    default: {
      return state;
    }
  }
};
