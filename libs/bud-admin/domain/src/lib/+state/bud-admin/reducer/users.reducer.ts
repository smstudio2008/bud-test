import { createReducer, on, Action } from '@ngrx/store';

import * as UsersActions from '../actions/users.actions';
import { UsersState } from '../models/users.models';

export const USERS_FEATURE_KEY = 'users';

export const initialUsersState: UsersState = {
    users: [],
    loaded: false,
    error: null,
};

const reducer = createReducer(
    initialUsersState,
    on(UsersActions.initUsers, (state) => ({ ...state, loaded: false, error: null })),
    on(UsersActions.loadUsersSuccess, (state, { users }) => ({
        ...state,
        users,
        loaded: true,
        error: null,
    })),
    on(UsersActions.deleteUser, (state, { userId }) => ({
        ...state,
        users: state.users.filter((user) => user.id !== userId),
        error: null,
    })),
    on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, error }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return reducer(state, action);
}
