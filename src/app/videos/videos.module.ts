import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { containers } from './containers';
import { VideoService } from './services/video.service';
import { VideoRoutingModule } from './videos-routing.module';
import { components } from './components';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [containers, components, SafePipe],
  imports: [CommonModule, VideoRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [VideoService],
})
export class VideosModule {}
