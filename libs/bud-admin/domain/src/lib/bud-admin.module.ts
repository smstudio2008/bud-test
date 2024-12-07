import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUsers from './+state/bud-admin/reducer/users.reducer';
import { UsersEffects } from './+state/bud-admin/effects/users.effects';
import { UsersFacade } from './application/users.facade';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
        EffectsModule.forFeature([UsersEffects]),
    ],
    providers: [UsersFacade],
})
export class BudAdminDomainModule {}
