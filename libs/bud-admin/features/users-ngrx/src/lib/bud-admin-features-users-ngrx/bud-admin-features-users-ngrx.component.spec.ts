import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudAdminFeaturesUsersNgrxComponent } from './bud-admin-features-users-ngrx.component';

describe('BudAdminFeaturesUsersNgrxComponent', () => {
    let component: BudAdminFeaturesUsersNgrxComponent;
    let fixture: ComponentFixture<BudAdminFeaturesUsersNgrxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BudAdminFeaturesUsersNgrxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BudAdminFeaturesUsersNgrxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
