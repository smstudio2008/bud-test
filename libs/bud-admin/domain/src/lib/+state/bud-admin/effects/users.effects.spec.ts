import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersEffects } from './users.effects';

import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { cold, hot } from 'jest-marbles';

import { UserService } from '../../../infrastructure/services/user.service';
import * as UsersActions from '../actions/users.actions';
import { HttpErrorResponse } from '@angular/common/http';

describe('UsersEffects', () => {
    let actions$: Observable<any>;
    let effects: UsersEffects;
    let userService: jest.Mocked<UserService>;

    beforeEach(() => {
        const userServiceMock = {
            getUsers: jest.fn(),
        };

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                UsersEffects,
                provideMockActions(() => actions$),
                { provide: UserService, useValue: userServiceMock },
                provideMockStore(),
            ],
        });

        effects = TestBed.inject(UsersEffects);
        userService = TestBed.inject(UserService) as jest.Mocked<UserService>;
    });

    it('should return loadUsersSuccess when loadUsers$ is successful', () => {
        const users = [
            {
                id: 1,
                firstName: 'Emily',
                lastName: 'Johnson',
                maidenName: 'Smith',
                age: 28,
                gender: 'female',
                email: 'emily.johnson@x.dummyjson.com',
                phone: '+81 965-431-3024',
                username: 'emilys',
                password: 'emilyspass',
                birthDate: '1996-5-30',
                image: 'https://dummyjson.com/icon/emilys/128',
                bloodGroup: 'O-',
                height: 193.24,
                weight: 63.16,
                eyeColor: 'Green',
                hair: { color: 'Brown', type: 'Curly' },
                ip: '42.48.100.32',
                address: {
                    address: '626 Main Street',
                    city: 'Phoenix',
                    street: 'new',
                    state: 'Mississippi',
                    stateCode: 'MS',
                    postalCode: '29112',
                    coordinates: { lat: -77.16213, lng: -92.084824 },
                    country: 'United States',
                },
                macAddress: '47:fa:41:18:ec:eb',
                university: 'University of Wisconsin--Madison',
                bank: {
                    cardExpire: '03/26',
                    cardNumber: '9289760655481815',
                    cardType: 'Elo',
                    currency: 'CNY',
                    iban: 'YPUXISOBI7TTHPK2BR3HAIXL',
                },
                company: {
                    department: 'Engineering',
                    name: 'Dooley, Kozey and Cronin',
                    title: 'Sales Manager',
                    address: {
                        address: '263 Tenth Street',
                        city: 'San Francisco',
                        state: 'Wisconsin',
                        stateCode: 'WI',
                        postalCode: '37657',
                        coordinates: { lat: 71.814525, lng: -161.150263 },
                        country: 'United States',
                    },
                },
                ein: '977-175',
                ssn: '900-590-289',
                userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
                crypto: {
                    coin: 'Bitcoin',
                    wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
                    network: 'Ethereum (ERC20)',
                },
                role: 'admin',
            },
        ];

        const action = UsersActions.initUsers();
        const outcome = UsersActions.loadUsersSuccess({ users });

        actions$ = hot('-a-', { a: action });
        const response = cold('-b|', { b: users });
        userService.getUsers.mockReturnValue(response);

        const expected = cold('--c', { c: outcome });
        expect(effects.loadUsers$).toBeObservable(expected);
    });

    it('should return loadUsersFailure when loadUsers$ fails', () => {
        const action = UsersActions.initUsers();
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404,
            statusText: 'Not Found',
        });
        const completion = UsersActions.loadUsersFailure({ error: errorResponse });

        actions$ = hot('-a-', { a: action });
        const response = cold('-#|', {}, errorResponse);
        userService.getUsers.mockReturnValue(response);

        const expected = cold('--c', { c: completion });
        expect(effects.loadUsers$).toBeObservable(expected);
    });
});
