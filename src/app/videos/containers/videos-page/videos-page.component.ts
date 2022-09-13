import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { combineLatest, filter } from 'rxjs';

import { getVideos } from '../../store/action';
import {
  selectIsLoading,
  selectIsLoadingVideosYT,
  selectVideos,
  selectVideosYT,
} from '../../store/selector';

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

  constructor(private store: Store, private datePipe: DatePipe) {
    this.store.dispatch(getVideos());
  }

  ngOnInit(): void {
    this.subscriptionData();
  }

  subscriptionData() {
    combineLatest([this.videos$, this.videosYT$])
      .pipe(
        filter(([videos, videosYT]) => videos !== null && videosYT !== null)
      )
      .subscribe(([videos, videosYT]) => {
        this.videos = videosYT.map((item: any, index: number) => {
          return {
            ...item,
            sharedBy: videos[index].sharedBy,
            date: videos[index].date,
          };
        });

        this.videos.sort((a, b) => {
          return b.date.toDate().getTime() - a.date.toDate().getTime();
        });
      });
  }
}
