import { createReducer, on } from '@ngrx/store';

import * as AuthAction from '../action';
import { User } from 'src/app/videos/models/video.model';

export interface AuthState {
  user: User,
  isLoading: boolean,
}

export const initialState: AuthState = {
  user: {},
  isLoading: false,
};

export const authReducer = createReducer(
  initialState,

  on(AuthAction.signIn, (state) => {
    return { ...state, isLoading: true };
  }),

  on(AuthAction.signInSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),

  on(AuthAction.signInFail, (state) => {
    return { ...state, isLoading: false };
  }),
);
