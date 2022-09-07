import {ActionReducerMap, Action} from '@ngrx/store';
import {InjectionToken} from '@angular/core';

import * as fromCasino from '../casino/store/reducers';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
  casino: fromCasino.CasinoState

}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    router: routerReducer,
    casino: fromCasino.casinoReducer,
  }),
});


