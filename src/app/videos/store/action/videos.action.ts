import { createAction, props } from '@ngrx/store';

import { Video } from '../../models/video.model';

export const getVideos = createAction('[VIDEOS] Get Videos');

export const getVideosSuccess = createAction(
  '[VIDEOS] Get Videos Success',
  props<{ videos: Array<Video> }>()
);

export const getVideosFail = createAction(
  '[VIDEOS] Get Videos Fail',
  props<{ error: any }>()
);

export const shareVideo = createAction(
  '[VIDEOS] Share Videos',
  props<{ video: Video }>()
);

export const shareVideoSuccess = createAction(
  '[VIDEOS] Share Videos Success',
);

export const shareVideoFail = createAction(
  '[VIDEOS] Share Videos Fail',
  props<{ error: any }>()
);
