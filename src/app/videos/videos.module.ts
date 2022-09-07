import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { containers } from './containers';
import { VideoService } from './services/video.service';
import { VideoRoutingModule } from './videos-routing.module';

@NgModule({
  declarations: [
    containers
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
  ],
  providers: [
    VideoService,
  ]
})
export class VideosModule { }
