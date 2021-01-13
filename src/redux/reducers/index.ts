import { combineReducers } from 'redux';
import { profileReducer, ProfileState } from './profileReducer';
import { tournamentReducer, TournamentState } from './tournamentReducer';
import { appReducer, AppState } from './appReducer';

export interface ApplicationState {
  tournament: TournamentState;
  profile: ProfileState;
  app: AppState;
}

export const rootReducer = combineReducers<ApplicationState>({
  tournament: tournamentReducer,
  profile: profileReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
