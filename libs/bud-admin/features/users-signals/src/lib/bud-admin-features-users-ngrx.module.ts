import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { BudAdminFeaturesUsersSignalHomeComponent } from './pages/home/bud-admin-features-users-signal-home/bud-admin-features-users-signal-home.component';

const components = [BudAdminFeaturesUsersSignalHomeComponent];

export const routes: Array<Route> = [
    {
        path: '',
        component: BudAdminFeaturesUsersSignalHomeComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [...components],
    exports: [...components],
})
export class BudAdminFeaturesUsersSignalModule {}
