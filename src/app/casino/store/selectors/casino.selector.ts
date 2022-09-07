import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers';
import { Jackpot } from '../../models/casino.model';

export const selectCasinoState =
  createFeatureSelector<fromReducer.CasinoState>('casino');

export const selectGames = createSelector(
  selectCasinoState,
  (state) => state.games
);

export const selectJackpots = createSelector(
  selectCasinoState,
  (state) => state.jackpots
);

export const selectJackpotRandom = createSelector(
  selectJackpots,
  (jackpots: Array<Jackpot>) => {
    const index = Math.floor(Math.random() * jackpots.length);
    return jackpots[index];
  }
);

export const selectIsLoading = createSelector(
  selectCasinoState,
  (state) => state.isLoading
);
