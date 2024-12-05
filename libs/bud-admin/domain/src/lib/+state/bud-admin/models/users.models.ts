import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../../entities/users/user.model';

export interface UsersState {
    users: IUser[];
    loaded: boolean;
    error: HttpErrorResponse | null;
}
