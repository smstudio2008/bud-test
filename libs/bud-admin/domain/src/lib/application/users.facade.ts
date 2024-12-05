import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UsersActions from '../+state/bud-admin/actions/users.actions';

import * as UsersSelectors from '../+state/bud-admin/selectors/users.selectors';

@Injectable()
export class UsersFacade {
    private readonly store = inject(Store);

    public loaded$ = this.store.pipe(select(UsersSelectors.getUserResults));

    public loadUser(): void {
        this.store.dispatch(UsersActions.initUsers());
    }

    public deleteUser(userId: number): void {
        this.store.dispatch(UsersActions.deleteUser({ userId }));
    }
}
