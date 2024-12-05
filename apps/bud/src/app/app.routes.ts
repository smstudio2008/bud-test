import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'ngrx',
        loadChildren: () => import('@bud-admin/users-ngrx').then((module) => module.BudAdminFeaturesUsersNgrxModule),
    },
    {
        path: 'signal',
        loadChildren: () => import('@bud-admin/users-signals').then((module) => module.BudAdminFeaturesUsersSignalModule),
    },
];
