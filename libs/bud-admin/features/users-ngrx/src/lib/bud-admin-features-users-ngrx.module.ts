import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent, InputComponent } from '@bud/ui';
import { BudAdminDomainModule } from '@bud-admin/domain';

import { BudAdminFeaturesUsersNgrxHomeComponent } from './pages/home/bud-admin-features-users-ngrx-home/bud-admin-features-users-ngrx-home.component';
import { BudAdminFeaturesUsersNgrxFormComponent } from './components/bud-admin-features-users-ngrx-form/bud-admin-features-users-ngrx-form.component';

const components = [BudAdminFeaturesUsersNgrxHomeComponent, BudAdminFeaturesUsersNgrxFormComponent];

export const routes: Array<Route> = [
    {
        path: '',
        component: BudAdminFeaturesUsersNgrxHomeComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, ButtonComponent, InputComponent, BudAdminDomainModule],
    declarations: [...components],
    exports: [...components],
})
export class BudAdminFeaturesUsersNgrxModule {}
