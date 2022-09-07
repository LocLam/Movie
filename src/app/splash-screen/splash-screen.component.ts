import { Component, Input, OnInit } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  @Input() duration: number = 0.5;
  @Input() animationType: SplashAnimationType = SplashAnimationType.SlideLeft;

  windowWidth = '';
  splashTransition = '';
  opacityChange = 1;
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = '';

      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left ' + this.duration + 's';
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + 'px';
          transitionStyle = 'left ' + this.splashTransition + 's';
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = 'opacity ' + this.splashTransition + 's';
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.duration * 1000);
    }, 1000);
  }
}
