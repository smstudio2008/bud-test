import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appRoutes } from './app.routes';

import { metaReducers, reducers } from './+store/reducers';

import { CardComponent } from '@bud/ui';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgOptimizedImage,
        CardComponent,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            logOnly: !isDevMode(),
        }),
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
