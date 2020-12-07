import React from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initState = {
  competionID: 2017,
  listCompetions: [],
  setCompetionInfo: null,
  currentTeamID: null,
  teamInfo: null,
};

export { AppContext, reducer, initState };
