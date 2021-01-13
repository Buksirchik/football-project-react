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
  testtt: number;
};

export type TournamentList = {
  competitions: Tournament[];
  filters: {
    plan: string;
  };
  count: number;
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
    },
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

export interface Favorite {
  id: number;
  name?: string;
  crestUrl?: string;
  position?: string;
  clubName?: string;
  clubIcon?: string;
}

export interface FavoriteItem {
  [key: string]: Favorite;
}
