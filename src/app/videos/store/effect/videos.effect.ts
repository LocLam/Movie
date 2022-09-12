import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as VideoActions from '../action';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video.model';
import { YoutubeService } from '../../services/youtube.service';
import { Store } from '@ngrx/store';
import { getVideosYT } from '../action';

@Injectable()
export class VideoEffects {
  getVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getVideos),
      mergeMap(() =>
        this.videoService.getVideos().pipe(
          map((videos: Array<Video>) => {
            
            let videoIds: any = videos?.map((video: any) => {
              return video.urlId;
            });
            if (videoIds && videoIds.length > 0) {
            }
            this.store.dispatch(getVideosYT({ videoIds }));
            // return VideoActions.getVideosYT({ videoIds });
            return VideoActions.getVideosSuccess({ videos });
          }),
          catchError((error) => {
            return of(VideoActions.getVideosFail({ error }));
          })
        )
      )
    )
  );
  shareVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.shareVideo),
      mergeMap((action: any) =>
        this.videoService.shareVideo(action).pipe(
          map((response: any) => {
            return VideoActions.shareVideoSuccess({message: '👌 Shared successfully.'});
          }),
          catchError((error) => {
            return of(VideoActions.shareVideoFail({ error }));
          })
        )
      )
    )
  );

  getVideosYT$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActions.getVideosYT),
      mergeMap((action: any) =>
        this.yt.getVideosForChanel(action.videoIds).pipe(
          map((videos: any) => {
            console.log('video', videos);

            return VideoActions.getVideosYTSuccess({ videoYt: videos.items });
          }),
          catchError((error) => {
            return of(VideoActions.getVideosFail({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private videoService: VideoService,
    private yt: YoutubeService,
    private store: Store
  ) {}
}
