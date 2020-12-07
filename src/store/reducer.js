export function reducer(state, action) {
  switch (action.type) {
    case "setCompetion":
      return {
        ...state,
        competionID: action.payload,
      };
    case "setListCompetions":
      return {
        ...state,
        listCompetions: [...action.payload],
      };
    case "setCompetionInfo":
      return {
        ...state,
        competionInfo: action.payload,
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
