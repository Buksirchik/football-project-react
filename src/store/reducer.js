export function reducer(state, action) {
  switch (action.type) {
    case "setCompetition":
      return {
        ...state,
        competitionID: action.payload,
      };
    case "setListCompetitions":
      return {
        ...state,
        listCompetitions: [...action.payload],
      };
    case "setCompetitionInfo":
      return {
        ...state,
        competitionInfo: action.payload,
      };
    case "setCurrentTeamID":
      return {
        ...state,
        currentTeamID: action.payload,
      };
    case "setTeamInfo":
      return {
        ...state,
        teamInfo: action.payload,
      };
    case "deleteTeamInfo":
      return {
        ...state,
        teamInfo: null,
      };
    default:
      return state;
  }
}
