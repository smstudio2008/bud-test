import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as UsersActions from '../actions/users.actions';

import { UserService } from '../../../infrastructure/services/user.service';

@Injectable()
export class UsersEffects {
    private readonly actions$ = inject(Actions);
    private readonly _userService: UserService = inject(UserService);

    public loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.initUsers),
            switchMap(() =>
                this._userService.getUsers().pipe(
                    map((users) => UsersActions.loadUsersSuccess({ users })),
                    catchError((error) => of(UsersActions.loadUsersFailure({ error })))
                )
            )
        )
    );
}
