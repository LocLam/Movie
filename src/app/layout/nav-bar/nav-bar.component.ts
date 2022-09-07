import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { getGames } from 'src/app/casino/store/actions';
import { Game } from 'src/app/casino/models/casino.model';
import { selectGames } from 'src/app/casino/store/selectors';
import { CasinoService } from 'src/app/casino/service/casino.service';

import { Navbar } from '../../interface/nav-bar.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navbarData: Array<Navbar> = [];
  games: Array<Game> | undefined;
  games$ = this.store.pipe(select(selectGames));
  orders: Array<Navbar> | undefined;

  showDropdown = false;

  constructor(private store: Store) {
    this.store.dispatch(getGames());
  }

  ngOnInit(): void {
    this.games$.subscribe((games: Array<Game>) => {
      if (games) {
        this.games = games;
        this.getNavbarData(this.games);
      }
    });
  }

  getNavbarData(games: Array<Game>) {
    let arrNavbar: Array<string> = [];

    games.forEach((game: Game) => {
      arrNavbar = arrNavbar.concat(game.categories);
    });

    arrNavbar = [...new Set(arrNavbar)];

    let order: Array<Navbar> = [];

    this.navbarData = arrNavbar.map((item: string) => {
      if (item === 'top') {
        return {
          label: 'Top game',
          href: item,
        };
      }

      if (item === 'new') {
        return {
          label: 'New game',
          href: item,
        };
      }

      if (item === 'ball' || item === 'virtual' || item === 'fun') {
        order.push({
          label: item,
          href: item,
        });
      }

      return {
        label: item,
        href: item,
      };
    });

    this.navbarData = this.navbarData.filter(
      (item: Navbar) =>
        item.href !== 'ball' && item.href !== 'virtual' && item.href !== 'fun'
    );

    this.orders = order;
  }
}
