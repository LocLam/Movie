import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as VideoActions from '../action';

import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  // getVideos$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(VideoActions.getVideos),
  //     mergeMap(() =>
  //       this.videoService.getVideos().pipe(
  //         map((videos: Array<Video>) => {

  //           let videoIds: any = videos?.map((video: any) => {
  //             return video.urlId;
  //           });
  //           if (videoIds && videoIds.length > 0) {
  //           }
  //           this.store.dispatch(getVideosYT({ videoIds }));
  //           // return VideoActions.getVideosYT({ videoIds });
  //           return VideoActions.getVideosSuccess({ videos });
  //         }),
  //         catchError((error) => {
  //           return of(VideoActions.getVideosFail({ error }));
  //         })
  //       )
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private store: Store) {}
}
