import { createReducer, on } from '@ngrx/store';

import { User } from 'src/app/videos/models/video.model';

import * as AuthAction from '../action';

export interface AuthState {
  user: User | null;
  users: Array<User>;
  isLoading: boolean;
}

export const initialState: AuthState = {
  user: null,
  users: [],
  isLoading: false,
};

export const authReducer = createReducer(
  initialState,

  on(AuthAction.getListUser, (state) => {
    return { ...state };
  }),

  on(AuthAction.getListUserSuccess, (state, action) => {
    return {
      ...state,
      users: action.users,
    };
  }),

  on(AuthAction.getListUserFail, (state) => {
    return { ...state };
  }),

  on(AuthAction.signIn, (state) => {
    return { ...state, isLoading: true };
  }),

  on(AuthAction.signInSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      user: action.user,
    };
  }),

  on(AuthAction.signInFail, (state) => {
    return { ...state, isLoading: false };
  }),

  on(AuthAction.signUp, (state) => {
    return { ...state, isLoading: true };
  }),

  on(AuthAction.signUpSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      user: action.user,
    };
  }),

  on(AuthAction.signUpFail, (state) => {
    return { ...state, isLoading: false };
  }),

  on(AuthAction.signOut, (state) => {
    return { ...state, user: null };
  })
);
