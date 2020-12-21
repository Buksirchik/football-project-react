import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { tournamentReducer } from "./tournamentReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  tournament: tournamentReducer,
  profile: profileReducer,
  app: appReducer,
});
