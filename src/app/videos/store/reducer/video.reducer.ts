import { createReducer, on } from '@ngrx/store';

import * as VideoActions from '../action';
import { Video } from '../../models/video.model';

export interface VideoState {
  videos: Array<Video>;
  isLoading: boolean;
}

export const initialState: VideoState = {
  videos: [],
  isLoading: false,
};

export const videoReducer = createReducer(
  initialState,

  on(VideoActions.getVideos, (state) => {
    return { ...state, isLoading: true };
  }),

  on(VideoActions.getVideosSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      videos: action.videos,
    };
  }),

  on(VideoActions.getVideosFail, (state) => {
    return { ...state, isLoading: false };
  }),

  on(VideoActions.shareVideo, (state) => {
    return { ...state, isLoading: true };
  }),

  on(VideoActions.shareVideoSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(VideoActions.shareVideoFail, (state) => {
    return { ...state, isLoading: false };
  }),
);
