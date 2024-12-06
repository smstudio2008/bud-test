import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { UsersEffects } from './users.effects';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cold, hot } from 'jest-marbles';

import { UserService } from '../../../infrastructure/services/user.service';
import * as UsersActions from '../actions/users.actions';


import { IUser } from '../../../entities/users/user.model';

describe('UsersEffects', () => {
    let actions$: Observable<any>;
    let effects: UsersEffects;
    let userService: jest.Mocked<UserService>;

    // Mock data based on IUser
    const mockUser: IUser = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumbers: [1234567890, 9876543210],
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                UsersEffects,
                provideMockActions(() => actions$),
                provideMockStore(),
                {
                    provide: UserService,
                    useValue: {
                        updateUser: jest.fn(),
                    },
                },
            ],
        });

        effects = TestBed.inject(UsersEffects);
        userService = TestBed.inject(UserService) as jest.Mocked<UserService>;
    });

    describe('updateUser$', () => {
        it('should dispatch updatedUserSuccess when updateUser succeeds', () => {
            const action = UsersActions.updateUserInfo({ userData: mockUser });
            const outcome = UsersActions.updatedUserSuccess({ user: mockUser });

            actions$ = hot('-a-', { a: action });
            const response = cold('-b|', { b: mockUser });
            userService.updateUser.mockReturnValue(response);

            const expected = cold('--c', { c: outcome });
            expect(effects.updateUser$).toBeObservable(expected);
        });

        it('should dispatch updatedUserFailure when updateUser fails', () => {
            const action = UsersActions.updateUserInfo({ userData: mockUser });
            const errorResponse = new HttpErrorResponse({
                error: 'test 500 error',
                status: 500,
                statusText: 'Internal Server Error',
            });
            const outcome = UsersActions.updatedUserFailure({ error: errorResponse });

            actions$ = hot('-a-', { a: action });
            const response = cold('-#|', {}, errorResponse);
            userService.updateUser.mockReturnValue(response);

            const expected = cold('--c', { c: outcome });
            expect(effects.updateUser$).toBeObservable(expected);
        });
    });
});
