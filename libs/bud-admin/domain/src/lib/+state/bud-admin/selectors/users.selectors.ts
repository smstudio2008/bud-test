import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY } from '../reducer/users.reducer';
import { UsersState } from '../models/users.models';

export const selectUsersState = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

export const getUserResults = createSelector(selectUsersState, (state: UsersState) => state?.users);
