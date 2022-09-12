import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { combineLatest, filter, take } from 'rxjs';
import { getGames } from 'src/app/casino/store/actions';

import { Video } from '../../models/video.model';
import { getVideos, getVideosYT } from '../../store/action';
import { selectIsLoading, selectIsLoadingVideosYT, selectVideos, selectVideosYT } from '../../store/selector';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
})
export class VideosPageComponent implements OnInit {
  isLoading$ = this.store.pipe(select(selectIsLoading));
  isLoadingYT$ = this.store.pipe(select(selectIsLoadingVideosYT));

  videos$ = this.store.pipe(select(selectVideos));
  videosYT$ = this.store.pipe(select(selectVideosYT));
  
  videos!: Array<any>;
  constructor(private store: Store) {
    this.store.dispatch(getVideos());
  }

  ngOnInit(): void {
    combineLatest([this.videos$, this.videosYT$])
    .pipe(
      filter(([videos, videosYT]) => videos !== null && videosYT !== null)
    )
    .subscribe(([videos, videosYT]) => {
      console.log('videos', videos);
      console.log("videosYT", videosYT);
      this.videos = videosYT.map((item: any, index: number)=>{
        return {
          ...item,
          sharedBy: videos[index].sharedBy
        }
      });
      console.log('videosArr', this.videos);
      
    });
  }
}
