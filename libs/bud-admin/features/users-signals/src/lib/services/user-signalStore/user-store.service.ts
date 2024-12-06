import { Injectable, signal } from '@angular/core';
import { IUser } from '@bud-admin/domain';

@Injectable({
    providedIn: 'root',
})
export class UserStore {
    private readonly _user = signal<IUser | null>(null);
    public readonly user = this._user.asReadonly();

    public initUser(user: IUser): void {
        this._user.set(user);
    }

    public updateUser(userData: IUser): void {
        this._user.set(userData);
    }
}
