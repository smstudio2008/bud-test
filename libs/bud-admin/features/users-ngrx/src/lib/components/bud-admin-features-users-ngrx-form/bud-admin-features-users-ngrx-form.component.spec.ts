/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BudAdminFeaturesUsersNgrxFormComponent } from './bud-admin-features-users-ngrx-form.component';
import { ButtonComponent, InputComponent } from '@bud/ui';
import { ReactiveFormsModule } from '@angular/forms';

describe('BudAdminFeaturesUsersNgrxFormComponent', () => {
    let component: BudAdminFeaturesUsersNgrxFormComponent;
    let fixture: ComponentFixture<BudAdminFeaturesUsersNgrxFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BudAdminFeaturesUsersNgrxFormComponent],
            imports: [ButtonComponent, InputComponent, ReactiveFormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BudAdminFeaturesUsersNgrxFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
