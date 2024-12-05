import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { RouterReducerState } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { selectUrl } from './+store/selectors/router.selector';
import { map } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    public readonly title = 'Bud';
    public readonly excludedRoutes = ['/ngrx', '/signal'];
    public readonly store: Store<RouterReducerState> = inject(Store);

    public selectUrl$ = this.store.pipe(
        select(selectUrl),
        map((url: string | null) => (this.excludedRoutes.includes(url || '') ? null : url))
    );

    private readonly _router: Router = inject(Router);

    public openLazyModule(url: string): void {
        this._router.navigate([url]);
    }
}
