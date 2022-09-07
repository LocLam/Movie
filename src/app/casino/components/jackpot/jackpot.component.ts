import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, tap, timer, interval, delay, mapTo } from 'rxjs';

import { Jackpot } from '../../models/casino.model';
import { getJackpots } from '../../store/actions';
import { selectJackpotRandom } from '../../store/selectors';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.scss'],
})
export class JackpotComponent implements OnInit {
  isOpenNotify = false;
  timeOut = 3000;

  jackpot$ = this.store.pipe(
    select(selectJackpotRandom),
    filter((jackpot: Jackpot) => !!jackpot),
    delay(this.timeOut)
  );

  constructor(private store: Store) {}

  ngOnInit() {
    timer(this.timeOut).subscribe(() => {
      this.showRandomJackpot();
      this.isOpenNotify = true;
    });
  }

  showRandomJackpot() {
    interval(this.timeOut)
      .pipe(tap(() => (this.isOpenNotify = true)))
      .subscribe(() => {
        this.store.dispatch(getJackpots());
        setTimeout(() => {
          this.isOpenNotify = false;
        }, 2000);
      });
  }
}
