import { createReducer, on } from '@ngrx/store';

import * as VideoActions from '../action';
import { Video } from '../../models/video.model';

export interface VideoState {
  videos: Array<Video>;
  videosYT: Array<any>;
  isLoading: boolean;
  isLoadingVideosYT: boolean;
  messageShareVideo: string;
}

export const initialState: VideoState = {
  videos: [],
  videosYT: [],
  isLoading: false,
  isLoadingVideosYT: false,
  messageShareVideo: '',
};

export const videoReducer = createReducer(
  initialState,

  on(VideoActions.getVideos, (state) => {
    return {
      ...state,
      isLoading: true,
      videos: [],
      videosYT: [],
    };
  }),

  on(VideoActions.getVideosSuccess, (state, action) => {
    return {
      ...state,
      videos: action.videos,
      isLoading: false,
    };
  }),

  on(VideoActions.getVideosFail, (state) => {
    return { ...state, isLoading: false };
  }),

  on(VideoActions.getVideosYT, (state) => {
    return { ...state, isLoadingVideosYT: true };
  }),

  on(VideoActions.getVideosYTSuccess, (state, action) => {
    return {
      ...state,
      isLoadingVideosYT: false,
      videosYT: action.videoYt,
    };
  }),

  on(VideoActions.getVideosYTFail, (state) => {
    return { ...state, isLoadingVideosYT: false };
  }),

  on(VideoActions.shareVideo, (state) => {
    return { ...state, isLoading: true, messageShareVideo: '' };
  }),

  on(VideoActions.shareVideoSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      messageShareVideo: action.message,
    };
  }),

  on(VideoActions.shareVideoFail, (state) => {
    return { ...state, isLoading: false, messageShareVideo: '' };
  }),

  on(VideoActions.resetMessageShareVideo, (state) => {
    return { ...state, messageShareVideo: '' };
  })
);
