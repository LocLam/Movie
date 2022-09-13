import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from '../reducer';

export const selectAuthState =
  createFeatureSelector<fromReducer.AuthState>('users');

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectUsers = createSelector(
  selectAuthState,
  (state) => state.users
);

export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);
