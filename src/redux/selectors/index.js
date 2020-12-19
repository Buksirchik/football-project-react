export const getFavoriteTeamsSelector = (state) =>
  state.profile.listFavoriteTeams;
export const getFavoritePlayersSelector = (state) =>
  state.profile.listFavoritePlayers;
export const getListTournamentsSelector = (state) =>
  state.tournament.listTournaments;
export const getTournamentInfoSelector = (state) =>
  state.tournament.tournamentInfo;
export const getTeamInfoSelector = (state) => state.tournament.teamInfo;
