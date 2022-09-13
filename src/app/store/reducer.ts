import {InjectionToken} from '@angular/core';

import {ActionReducerMap, Action} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

import * as fromCasino from '../casino/store/reducers';
import * as fromVideos from '../videos/store/reducer';
import * as fromUser from '../auth/store/reducer';


export interface AppState {
  router: RouterReducerState;
  casino: fromCasino.CasinoState,
  videos: fromVideos.VideoState,
  users: fromUser.AuthState,
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    router: routerReducer,
    casino: fromCasino.casinoReducer,
    videos: fromVideos.videoReducer,
    users: fromUser.authReducer,
  }),
});


