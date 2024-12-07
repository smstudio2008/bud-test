import { createReducer, on, Action } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
import { UsersState } from '../models/users.models';

export const USERS_FEATURE_KEY = 'userDetail';

export const initialUsersState: UsersState = {
    user: null,
    history: [],
    loaded: false,
    error: null,
};

const reducer = createReducer(
    initialUsersState,
    on(UsersActions.updateUsersFormInfo, (state, { user }) => ({
        ...state,
        history: state.user ? [...state.history, state.user] : state.history,
        user,
    })),
    on(UsersActions.undoUserFormUpdate, (state) => {
        const previousUser = state.history[state.history.length - 1] || null;
        const updatedHistory = state.history.slice(0, -1);
        return {
            ...state,
            user: previousUser,
            history: updatedHistory,
        };
    }),
    on(UsersActions.updatedUserSuccess, (state, { user }) => ({
        ...state,
        user: { ...state.user, ...user },
    })),
    on(UsersActions.updatedUserFailure, (state, { error }) => ({ ...state, error }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return reducer(state, action);
}
