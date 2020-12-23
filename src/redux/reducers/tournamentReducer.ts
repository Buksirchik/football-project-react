import { ActionTypes } from "./../actions/types";
import {
  SET_TEAM_INFO,
  SET_TOURNAMENTS_LIST,
  SET_TOURNAMENT_INFO,
} from "../actionTypes";

export type Tournament = {
  area: {
    id: number;
    name: string;
    countryCode: string;
    ensignUrl?: string;
  };
  countryCode: string;
  ensignUrl: string;
  id: number;
  name: string;
  code: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: number;
  };
  emblemUrl?: string;
  lastUpdated: string;
  numberOfAvailableSeasons: number;
  plan: string;
};

export type TeamStatistics = {
  position: number;
  team: {
    id: number;
    name: string;
    crestUrl: string;
  };
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
};

export type Standings = {
  stage: string;
  type: string;
  group: string;
  table: TeamStatistics[];
};

export type TournamentInfo = {
  filters: object;
  competition: {
    id: number;
    area: {
      id: number;
      name: string;
    };
    name: string;
    code: string;
    plan: string;
    lastUpdated: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: number;
  };
  standings: Standings[];
};

export type Player = {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  shirtNumber: number;
  role: string;
};

export interface TeamInfo {
  id: number;
  area: {
    id: number;
    name: string;
  };
  activeCompetitions: [
    {
      id: number;
      area: {
        id: number;
        name: string;
      };
      name: string;
      code: string;
      plan: string;
      lastUpdated: string;
    }
  ];
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: Player[];
  lastUpdated: string;
}

export interface TournamentState {
  listTournaments: Tournament[];
  tournamentInfo: TournamentInfo | null;
  teamInfo: TeamInfo | null;
}

const initialState: TournamentState = {
  listTournaments: [],
  tournamentInfo: null,
  teamInfo: null,
};

export const tournamentReducer = (
  state = initialState,
  action: ActionTypes
): TournamentState => {
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
