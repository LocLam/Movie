import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromReducer from '../reducer';

export const selectUserState =
  createFeatureSelector<fromReducer.UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectIsLoading = createSelector(
  selectUserState,
  (state) => state.isLoading
);