import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../../entities/users/user.model';

export interface UsersState {
    user: IUser | null;
    history: IUser[]
    loaded: boolean;
    error: HttpErrorResponse | null;
}
