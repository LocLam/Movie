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
      name: 'Khong Phai Dang Vua dau',
      description: 'Description khong Phai Dang Vua dau',
      url: 'https://www.youtube.com/watch?v=Xvhfy_9pNBI',
      sharedBy: {
        id: '123',
        email: 'lamloc@gmail.com',
        name: 'Lam Loc',
      },
    },
    {
      name: 'Anh sai roi',
      description: 'Description anh sai roi',
      url: 'https://www.youtube.com/watch?v=F4htBhP1qUo&list=PLMZyn4ePUSpIv5S83-_OJ1UFsm_vLbjPE&index=3',
      sharedBy: {
        id: '1234',
        email: 'abc@gmail.com',
        name: 'abc',
      },
    },
    {
      name: 'Chac ai do se ve',
      description: 'Description Chac ai do se ve',
      url: 'https://www.youtube.com/watch?v=F4htBhP1qUo&list=PLMZyn4ePUSpIv5S83-_OJ1UFsm_vLbjPE&index=3',
      sharedBy: {
        id: '1234',
        email: 'abc@gmail.com',
        name: 'abc',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
