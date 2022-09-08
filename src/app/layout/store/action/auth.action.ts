import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/videos/models/video.model';

export const loginOrRegister = createAction(
  '[AUTH] Login Or Register',
  props<{ user: User }>()
);

export const loginOrRegisterSuccess = createAction(
  '[AUTH] Login Or Register Success',
  props<{ user: User }>()
);

export const loginOrRegisterFail = createAction(
  '[AUTH] Login Or Register Fail',
  props<{ error: any }>()
);

