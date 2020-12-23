import { RootState } from "./../reducers/index";

export const getFavoriteTeamsSelector = (state: RootState) =>
  state.profile.listFavoriteTeams;
export const getFavoritePlayersSelector = (state: RootState) =>
  state.profile.listFavoritePlayers;
export const getListTournamentsSelector = (state: RootState) =>
  state.tournament.listTournaments;
export const getTournamentInfoSelector = (state: RootState) =>
  state.tournament.tournamentInfo;
export const getTeamInfoSelector = (state: RootState) =>
  state.tournament.teamInfo;
export const getThemeSelector = (state: RootState) => state.app.theme;
