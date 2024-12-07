import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UsersActions from '../+state/bud-admin/actions/users.actions';

import * as UsersSelectors from '../+state/bud-admin/selectors/users.selectors';

import { IUser } from '../entities/users/user.model';

@Injectable()
export class UsersFacade {
    private readonly store = inject(Store);

    public loaded$ = this.store.pipe(select(UsersSelectors.getUserResults));

    public updateUserInfoToStore(user: IUser): void {
        this.store.dispatch(UsersActions.updateUsersFormInfo({ user }));
    }

    public saveUserOnServe(userData: IUser): void {
        this.store.dispatch(UsersActions.updateUserInfo({ userData }));
    }

    public undoChanges(): void {
        this.store.dispatch(UsersActions.undoUserFormUpdate());
    }
}
