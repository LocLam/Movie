import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromReducer from '../reducer';

export const selectVideosState =
  createFeatureSelector<fromReducer.VideoState>('videos');

export const selectVideos = createSelector(
  selectVideosState,
  (state) => state.videos
);

export const selectVideosYT = createSelector(
  selectVideosState,
  (state) => state.videosYT
);

export const selectMessageSharedVideosYT = createSelector(
  selectVideosState,
  (state) => state.messageShareVideo
);

export const selectIsLoading = createSelector(
  selectVideosState,
  (state) => state.isLoading
);

export const selectIsLoadingVideosYT = createSelector(
  selectVideosState,
  (state) => state.isLoadingVideosYT
);