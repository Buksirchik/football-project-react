import { TournamentInfo, TeamInfo, FavoriteItem, Tournament } from './../../types';
import { RootState } from './../reducers/index';

export const getFavoriteTeamsSelector = (state: RootState): FavoriteItem => state.profile.listFavoriteTeams;
export const getFavoritePlayersSelector = (state: RootState): FavoriteItem => state.profile.listFavoritePlayers;
export const getListTournamentsSelector = (state: RootState): Tournament[] => state.tournament.listTournaments;
export const getTournamentInfoSelector = (state: RootState): TournamentInfo | null => state.tournament.tournamentInfo;
export const getTeamInfoSelector = (state: RootState): TeamInfo | null => state.tournament.teamInfo;
export const getThemeSelector = (state: RootState): string => state.app.theme;
