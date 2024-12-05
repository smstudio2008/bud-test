import { createAction, props } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../../entities/users/user.model';

export const initUsers = createAction('[Users Page] Init');
export const loadUsersSuccess = createAction('[Users/API] Load Users Success', props<{ users: IUser[] }>());
export const loadUsersFailure = createAction('[Users/API] Load Users Failure', props<{ error: HttpErrorResponse }>());

export const deleteUser = createAction('[Users Page] Delete User', props<{ userId: number }>());


export const updateUsersFormInfo = createAction('[Users/Form] Update Users Form Info', props<{ users: IUser[] }>());