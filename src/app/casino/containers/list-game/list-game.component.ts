import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { combineLatest, filter } from 'rxjs';

import { getGames } from '../../store/actions';
import { Game } from '../../models/casino.model';
import { selectGames, selectIsLoading } from '../../store/selectors';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss'],
})
export class ListGameComponent implements OnInit {
  isLoading$ = this.store.pipe(select(selectIsLoading));
  games$ = this.store.pipe(select(selectGames));

  gamesOfCategory: Array<Game> = [];
  categorySelected = '';

  constructor(private store: Store, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.store.dispatch(getGames());
      this.categorySelected = params['id'];
    });
  }

  ngOnInit(): void {
    this.subscriptionData();
  }

  subscriptionData() {
    combineLatest([this.games$, this.route.params])
      .pipe(
        filter(([games, params]) => games !== null && params['id'] !== null)
      )
      .subscribe(([games, params]) => {
        this.gamesOfCategory = games.filter((game: Game) =>
          game.categories.includes(params['id'])
        );
      });
  }
}
