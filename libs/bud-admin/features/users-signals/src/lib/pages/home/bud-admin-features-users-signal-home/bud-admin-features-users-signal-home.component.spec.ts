/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BudAdminFeaturesUsersSignalHomeComponent } from './bud-admin-features-users-signal-home.component';

describe('BudAdminFeaturesUsersSignalHomeComponent', () => {
  let component: BudAdminFeaturesUsersSignalHomeComponent;
  let fixture: ComponentFixture<BudAdminFeaturesUsersSignalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudAdminFeaturesUsersSignalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudAdminFeaturesUsersSignalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
