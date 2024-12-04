import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudAdminFeaturesUsersSignalsComponent } from './bud-admin-features-users-signals.component';

describe('BudAdminFeaturesUsersSignalsComponent', () => {
    let component: BudAdminFeaturesUsersSignalsComponent;
    let fixture: ComponentFixture<BudAdminFeaturesUsersSignalsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BudAdminFeaturesUsersSignalsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BudAdminFeaturesUsersSignalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
