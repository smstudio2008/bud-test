import { isDevMode } from '@angular/core';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
    router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
