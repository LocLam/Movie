import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { getJackpots } from '../../store/actions';

@Component({
  selector: 'app-casino-page',
  templateUrl: './casino-page.component.html',
  styleUrls: ['./casino-page.component.scss'],
})
export class CasinoPageComponent {
  constructor(private store: Store) {
    this.store.dispatch(getJackpots());
  }
}
