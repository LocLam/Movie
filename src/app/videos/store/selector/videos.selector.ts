import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromReducer from '../reducer';

export const selectCasinoState =
  createFeatureSelector<fromReducer.VideoState>('videos');

export const selectVideos = createSelector(
  selectCasinoState,
  (state) => state.videos
);

export const selectIsLoading = createSelector(
  selectCasinoState,
  (state) => state.isLoading
);