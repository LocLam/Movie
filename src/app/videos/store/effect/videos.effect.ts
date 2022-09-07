import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as VideoActions from '../action';
import { Video } from '../../models/video.model';
import { VideoService } from '../../services/video.service';

@Injectable()
export class VideoEffects {
  getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getVideos),
      mergeMap(() =>
        this.videoService.getVideos().pipe(
          map((result: Array<Video>) => {
            return VideoActions.getVideosSuccess({ videos: result });
          }),
          catchError((error) => {
            return of(VideoActions.getVideosFail({ error }));
          })
        )
      )
    )
  );

  // getJackpots$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CasinoActions.getJackpots),
  //     mergeMap(() =>
  //       this.casinoService.getJackpots().pipe(
  //         map((result: Array<Jackpot>) => {
  //           return CasinoActions.getJackpotsSuccess({ jackpots: result });
  //         }),
  //         catchError((error) => {
  //           return of(CasinoActions.getJackpotsFail({ error }));
  //         })
  //       )
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private videoService: VideoService) {}
}
