/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BudAdminFeaturesUsersNgrxHomeComponent } from './bud-admin-features-users-ngrx-home.component';
import { UsersFacade } from '@bud-admin/domain';
import { provideMockStore } from '@ngrx/store/testing';

import { BudAdminFeaturesUsersNgrxFormComponent } from '../../../components/bud-admin-features-users-ngrx-form/bud-admin-features-users-ngrx-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, InputComponent } from '@bud/ui';
describe('BudAdminFeaturesUsersNgrxHomeComponent', () => {
    let component: BudAdminFeaturesUsersNgrxHomeComponent;
    let fixture: ComponentFixture<BudAdminFeaturesUsersNgrxHomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BudAdminFeaturesUsersNgrxHomeComponent, BudAdminFeaturesUsersNgrxFormComponent],
            imports: [ReactiveFormsModule,ButtonComponent,InputComponent],
            providers: [UsersFacade, provideMockStore({ initialState: {} })],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BudAdminFeaturesUsersNgrxHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
