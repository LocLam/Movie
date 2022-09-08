import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, OnChanges {
  @Input() video: Video | undefined;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.video) {
      // this.video = {
      //   ...this.video,
      //   url: this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url),
      // };
    }
  }

  ngOnInit(): void {}
}
