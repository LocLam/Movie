import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { shareVideo } from '../../store/action';
import {
  selectIsLoading,
  selectMessageSharedVideosYT,
} from '../../store/selector';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss'],
})
export class ShareLinkComponent implements OnInit {
  isLoading$ = this.store.pipe(select(selectIsLoading));
  message$ = this.store.pipe(select(selectMessageSharedVideosYT));

  urlPattern = '^(http(s)?://)?((w){3}.)?youtu(be|.be)?(.com)?/.+';
  form!: FormGroup;

  get url() {
    return this.form.get('url');
  }
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.form = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(this.urlPattern)]],
    });
  }

  onShare() {
    const urlId: any = this.youtube_parser(this.form.value.url);
    if (urlId) {
      this.store.dispatch(shareVideo({ urlId }));
    }
  }

  youtube_parser(url: string) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : '';
  }
}
