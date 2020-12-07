import React from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initState = {
  competitionID: 2017,
  listCompetitions: [],
  setCompetitionInfo: null,
  currentTeamID: null,
  teamInfo: null,
};

export { AppContext, reducer, initState };
