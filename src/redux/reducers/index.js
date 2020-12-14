import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { tournamentReducer } from "./tournamentReducer";

export const rootReducer = combineReducers({
  tournament: tournamentReducer,
  profile: profileReducer,
});
