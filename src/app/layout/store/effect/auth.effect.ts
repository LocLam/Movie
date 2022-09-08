import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { User } from 'src/app/videos/models/video.model';

import * as AuthActions from '../action';
import { AuthService } from '../../service/auth.service';

@Injectable()
export class AuthEffects {
  loginOrRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginOrRegister),
      mergeMap(() =>
        this.authService.getVideos().pipe(
          map((result: User) => {
            return AuthActions.loginOrRegister({ user: result });
          }),
          catchError((error) => {
            return of(AuthActions.loginOrRegisterFail({ error }));
          })
        )
      )
    )
  );
  
  constructor(private actions$: Actions, private authService: AuthService) {}
}
