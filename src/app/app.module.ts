import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

import {LayoutModule} from './layout/layout.module';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreModule, ActionReducer, MetaReducer} from '@ngrx/store';
import {ROOT_REDUCERS} from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CasinoEffects } from './casino/store/effects/casino.effect';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { VideoEffects } from './videos/store/effect';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    StoreModule.forRoot(ROOT_REDUCERS, {metaReducers}),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
        autoPause: true,
    }),
    EffectsModule.forRoot([CasinoEffects]),
    EffectsModule.forRoot([VideoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
