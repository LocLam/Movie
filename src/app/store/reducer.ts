import {InjectionToken} from '@angular/core';

import {ActionReducerMap, Action} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

import * as fromVideos from '../videos/store/reducer';
import * as fromUser from '../auth/store/reducer';


export interface AppState {
  router: RouterReducerState;
  videos: fromVideos.VideoState,
  users: fromUser.AuthState,
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    router: routerReducer,
    videos: fromVideos.videoReducer,
    users: fromUser.authReducer,
  }),
});


