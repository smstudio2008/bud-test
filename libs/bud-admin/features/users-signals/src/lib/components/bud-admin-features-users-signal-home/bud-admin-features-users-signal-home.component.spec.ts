import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BudAdminFeaturesUsersSignalHomeComponent } from './bud-admin-features-users-signal-home.component';
import { UserStore } from '../../services/user-signalStore/user-store.service';

describe('BudAdminFeaturesUsersSignalHomeComponent', () => {
    let component: BudAdminFeaturesUsersSignalHomeComponent;
    let fixture: ComponentFixture<BudAdminFeaturesUsersSignalHomeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [BudAdminFeaturesUsersSignalHomeComponent],
            providers: [UserStore],
        }).compileComponents();
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
