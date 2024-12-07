import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser } from '../../entities/users/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'https://dummyjson.com/users/add';

    private readonly _http: HttpClient = inject(HttpClient);

    public updateUser(userData: IUser): Observable<IUser> {
        return this._http.post<IUser>(this.apiUrl, userData);
    }
}
