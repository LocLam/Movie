import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';

import { LayoutModule } from './layout/layout.module';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './store/reducer';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { VideoEffects } from './videos/store/effect';
import { AuthService } from './auth/service/auth.service';
import { AuthEffects } from './auth/store/effect';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, SplashScreenComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([AuthEffects, VideoEffects]),

    HttpClientModule,   

    AngularFireModule.initializeApp(environment.firebaseConfig, 'share-yt'),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
