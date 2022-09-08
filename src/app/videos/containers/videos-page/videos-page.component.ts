import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
})
export class VideosPageComponent implements OnInit {
  videos: Array<Video> = [
    {
      name: 'Hãy trao cho anh',
      description: 'Description Hãy trao cho anh',
      url: 'https://youtu.be/knW7-x7Y7RE',
      sharedBy: {
        id: '123',
        email: 'lamloc@gmail.com',
        name: 'Lam Loc',
      },
    },
    {
      name: 'Chạy ngay đi',
      description: 'Description Chạy ngay đi',
      url: 'https://www.youtube.com//embed?v=32sYGCOYJUM&ab_channel=S%C6%A1nT%C3%B9ngM-TPOfficial',
      sharedBy: {
        id: '1234',
        email: 'abc@gmail.com',
        name: 'abc',
      },
    },
    {
      name: 'CHƯA QUÊN NGƯỜI YÊU CŨ | HÀ NHI',
      description: 'Description CHƯA QUÊN NGƯỜI YÊU CŨ | HÀ NHI',
      url: 'https://www.youtube.com/watch?v=6fIj4UwdSYo&ab_channel=H%C3%A0NhiOfficial',
      sharedBy: {
        id: '1234',
        email: 'abc@gmail.com',
        name: 'abc',
      },
    },
    {
      name: 'Waiting for you',
      description: 'Description Waiting for you',
      url: 'https://youtu.be/CHw1b_1LVBA',
      sharedBy: {
        id: '123',
        email: 'lamloc@gmail.com',
        name: 'Lam Loc',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
