import { Component, inject, OnInit } from '@angular/core';

import { IUser, UsersFacade } from '@bud-admin/domain';

import { Observable } from 'rxjs';

@Component({
    selector: 'bud-admin-users-ngrx-home',
    templateUrl: './bud-admin-features-users-ngrx-home.component.html',
    styleUrls: ['./bud-admin-features-users-ngrx-home.component.scss'],
})
export class BudAdminFeaturesUsersNgrxHomeComponent implements OnInit {
    private readonly _usersFacade: UsersFacade = inject(UsersFacade);

    public userDataInfo$: Observable<IUser | null | undefined> | undefined;

    public ngOnInit() {
        this.userDataInfo$ = this._usersFacade.loaded$;
    }

    public captureFormData(data: IUser) {
        this._usersFacade.updateUserInfoToStore(data);
    }

    public saveData(data: IUser) {
        this._usersFacade.saveUserOnServe(data);
    }

    public undoUpdate() {
        this._usersFacade.undoChanges();
    }
}
