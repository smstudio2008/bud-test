import { createAction, props } from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';

import { IUser } from '../../../entities/users/user.model';

export const updateUserInfo = createAction('[Users Page] Update User Info ', props<{ userData: IUser }>());
export const updatedUserSuccess = createAction('[Users/API] Updated User Success', props<{ user: IUser }>());
export const updatedUserFailure = createAction('[Users/API] Updated User  Failure', props<{ error: HttpErrorResponse }>());

export const updateUsersFormInfo = createAction('[Users/Form] Update Users Form Info', props<{ user: IUser }>());

export const undoUserFormUpdate = createAction('[Users/Form] Undo User Form Update');
