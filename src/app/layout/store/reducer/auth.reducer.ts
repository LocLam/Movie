import { createReducer, on } from '@ngrx/store';

import * as AuthActions from '../action';
import { User } from 'src/app/videos/models/video.model';

export interface UserState {
  user: User;
  isLoading: boolean;
}

export const initialState: UserState = {
  user: {},
  isLoading: false,
};

export const userReducer = createReducer(
  initialState,

  on(AuthActions.loginOrRegister, (state) => {
    return { ...state, isLoading: true };
  }),

  on(AuthActions.loginOrRegisterSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      isLoading: false,
    };
  }),

  on(AuthActions.loginOrRegisterFail, (state) => {
    return { ...state, isLoading: false };
  })
);
