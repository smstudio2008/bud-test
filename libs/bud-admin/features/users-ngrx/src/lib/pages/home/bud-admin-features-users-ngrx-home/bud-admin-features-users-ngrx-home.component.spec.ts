/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BudAdminFeaturesUsersNgrxHomeComponent } from './bud-admin-features-users-ngrx-home.component';

describe('BudAdminFeaturesUsersNgrxHomeComponent', () => {
  let component: BudAdminFeaturesUsersNgrxHomeComponent;
  let fixture: ComponentFixture<BudAdminFeaturesUsersNgrxHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudAdminFeaturesUsersNgrxHomeComponent ]
    })
    .compileComponents();
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
