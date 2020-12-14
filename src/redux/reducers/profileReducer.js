import { ADD_FAVORITE_PLAYER, ADD_FAVORITE_TEAM, DELETE_FAVORITE_PLAYER, DELETE_FAVORITE_TEAM } from "../actionTypes"

const initialState = {
  listFavoriteTeams: [],
  listFavoritePlayers: [],
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FAVORITE_PLAYER:
      return {
        ...state,
        listFavoritePlayers: [...state.listFavoritePlayers, action.payload]
      }
    case ADD_FAVORITE_TEAM:
      return {
        ...state,
        listFavoriteTeams: [...state.listFavoritePlayers, action.payload]
      }
    case DELETE_FAVORITE_PLAYER: 
      const playersArr = state.listFavoritePlayers
      const listPlayers = deleteFavoriteItem(playersArr, action.payload)
      return {
        ...state,
        listFavoritePlayers: [...listPlayers]
      }
      case DELETE_FAVORITE_TEAM: 
      const teamsArr = state.listFavoriteTeams
      const listTeam = deleteFavoriteItem(teamsArr, action.payload)
      return {
        ...state,
        listFavoriteTeams: [...listTeam]
      }
    default:
      return state
  }
}

function deleteFavoriteItem(arr, target) {
  return arr.filter( item => item.id !== target.id)
}