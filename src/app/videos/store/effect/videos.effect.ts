import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as VideoActions from '../action';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video.model';

@Injectable()
export class VideoEffects {
  getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getVideos),
      mergeMap(() =>
        this.videoService.getVideos().pipe(
          map((videos: Array<Video>) => {
            return VideoActions.getVideosSuccess({ videos });
          }),
          catchError((error) => {
            return of(VideoActions.getVideosFail({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private videoService: VideoService) {}
}
