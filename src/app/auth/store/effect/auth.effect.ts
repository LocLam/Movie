import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import * as AuthActions from '../action';

import { Store } from '@ngrx/store';
import { AuthService } from '../../service/auth.service';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from 'src/app/videos/models/video.model';

@Injectable()
export class AuthEffects {
  getListUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getListUser),
      mergeMap(() =>
        this.authService.getUsers().pipe(
          map((users: Array<User>) => {
            return AuthActions.getListUserSuccess({ users });
          }),
          catchError((error) => {
            return of(AuthActions.getListUserFail({ error }));
          })
        )
      )
    )
  );

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      map((action) => {
        this.setDataToLocalStorage(action.user);
        return AuthActions.signInSuccess({ user: action.user });
      })
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      mergeMap((action: any) =>
        this.authService.signUp(action.user.email, action.user.password).pipe(
          map((response: any) => {
            // console.log('response', response);
            this.setDataToLocalStorage(action.user);

            return AuthActions.signUpSuccess({ user: action.user });
          }),
          catchError((error) => {
            return of(AuthActions.signInFail({ error }));
          })
        )
      )
    )
  );

  setDataToLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService
  ) {}
}
