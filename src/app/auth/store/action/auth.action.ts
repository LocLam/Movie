import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/videos/models/video.model';

export const signIn = createAction('[AUTH] Sign In');

export const signInSuccess = createAction(
  '[AUTH]Sign In Success',
  props<{ user: User }>()
);

export const signInFail = createAction(
  '[AUTH] Sign In Fail',
  props<{ error: any }>()
);
