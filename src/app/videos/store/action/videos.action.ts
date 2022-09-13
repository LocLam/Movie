import { createAction, props } from '@ngrx/store';

import { User, Video } from '../../models/video.model';

export const getVideos = createAction('[VIDEOS] Get Videos');

export const getVideosSuccess = createAction(
  '[VIDEOS] Get Videos Success',
  props<{ videos: Array<any> }>()
);

export const getVideosFail = createAction(
  '[VIDEOS] Get Videos Fail',
  props<{ error: any }>()
);

export const shareVideo = createAction(
  '[VIDEOS] Share Videos',
  props<{ urlId: string, user: User }>()
);

export const shareVideoSuccess = createAction('[VIDEOS] Share Videos Success',   props<{ message: string }>());

export const shareVideoFail = createAction(
  '[VIDEOS] Share Videos Fail',
  props<{ error: any }>()
);

export const getVideosYT = createAction(
  '[VIDEOS] Get Videos YT',
  props<{ videoIds: Array<string> }>()
);

export const getVideosYTSuccess = createAction(
  '[VIDEOS] Get Videos YT Success',
  props<{ videoYt: Array<Video> }>()
);

export const getVideosYTFail = createAction(
  '[VIDEOS] Get Videos YT Fail',
  props<{ error: any }>()
);

export const resetMessageShareVideo = createAction(
  '[VIDEOS] Reset Message Share Video',
);