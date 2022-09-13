import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/videos/models/video.model';

export const getListUser = createAction('[AUTH] Get List User Sign In');

export const getListUserSuccess = createAction(
  '[AUTH] Get List User Sign In Success',
  props<{ users: Array<User> }>()
);

export const getListUserFail = createAction(
  '[AUTH] Get List User Sign In Fail',
  props<{ error: any }>()
);

export const signIn = createAction('[AUTH] Sign In', props<{ user: User }>());

export const signInSuccess = createAction(
  '[AUTH]Sign In Success',
  props<{ user: User }>()
);

export const signInFail = createAction(
  '[AUTH] Sign In Fail',
  props<{ error: any }>()
);

export const signUp = createAction('[AUTH] Sign Up', props<{ user: User }>());

export const signUpSuccess = createAction(
  '[AUTH] Sign Up Success',
  props<{ user: User }>()
);

export const signUpFail = createAction(
  '[AUTH] Sign Up Fail',
  props<{ error: any }>()
);

export const signOut = createAction('[AUTH] Sign Out');
