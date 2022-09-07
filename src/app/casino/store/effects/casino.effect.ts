import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Game, Jackpot } from '../../models/casino.model';
import { CasinoService } from '../../service/casino.service';
import * as CasinoActions from '../actions';

@Injectable()
export class CasinoEffects {
  getGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CasinoActions.getGames),
      mergeMap(() =>
        this.casinoService.getGames().pipe(
          map((result: Array<Game>) => {
            return CasinoActions.getGamesSuccess({ games: result });
          }),
          catchError((error) => {
            return of(CasinoActions.getGamesFail({ error }));
          })
        )
      )
    )
  );

  getJackpots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CasinoActions.getJackpots),
      mergeMap(() =>
        this.casinoService.getJackpots().pipe(
          map((result: Array<Jackpot>) => {
            return CasinoActions.getJackpotsSuccess({ jackpots: result });
          }),
          catchError((error) => {
            return of(CasinoActions.getJackpotsFail({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private casinoService: CasinoService
  ) {}
}
