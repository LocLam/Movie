import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as CasinoActions from '../actions';
import { Game, Jackpot } from '../../models/casino.model';

export interface CasinoState {
  games: Array<Game>;
  jackpots: Array<Jackpot>;
  isLoading: boolean;
}

export const initialState: CasinoState = {
  games: [],
  jackpots: [],
  isLoading: false,
};

export const casinoReducer = createReducer(
  initialState,

  on(CasinoActions.getGames, (state) => {
    return { ...state, isLoading: true };
  }),

  on(CasinoActions.getGamesSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      games: action.games,
    };
  }),

  on(CasinoActions.getGamesFail, (state) => {
    return { ...state, isLoading: false };
  }),

  on(CasinoActions.getJackpots, (state) => {
    return { ...state };
  }),

  on(CasinoActions.getJackpotsSuccess, (state, action) => {
    return {
      ...state,
      jackpots: action.jackpots,
    };
  }),

  on(CasinoActions.getJackpotsFail, (state) => {
    return { ...state };
  })
);
