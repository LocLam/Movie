import { createAction, props } from '@ngrx/store';
import { Game, Jackpot } from '../../models/casino.model';

export const getGames = createAction('[CASINO] Get Games');

export const getGamesSuccess = createAction(
  '[CASINO] Get Games Success',
  props<{ games: Array<Game> }>()
);

export const getGamesFail = createAction(
  '[CASINO] Get Games Fail',
  props<{ error: any }>()
);

export const getJackpots = createAction('[CASINO] Get Jackpots');

export const getJackpotsSuccess = createAction(
  '[CASINO] Get Jackpots Success',
  props<{ jackpots: Array<Jackpot> }>()
);

export const getJackpotsFail = createAction(
  '[CASINO] Get Jackpots Fail',
  props<{ error: any }>()
);
