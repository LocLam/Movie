import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Video } from '../../models/video.model';
import { getVideos } from '../../store/action';
import { selectVideos } from '../../store/selector';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
})
export class VideosPageComponent implements OnInit {
  videos$ = this.store.pipe(select(selectVideos));
  videos!: Array<Video>;
  constructor(private store: Store) {
    this.store.dispatch(getVideos());
  }

  ngOnInit(): void {
    this.videos$.subscribe((data: any) => {
      this.videos = data;
    });
  }
}
