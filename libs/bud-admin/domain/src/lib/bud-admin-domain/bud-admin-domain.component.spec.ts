import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudAdminDomainComponent } from './bud-admin-domain.component';

describe('BudAdminDomainComponent', () => {
    let component: BudAdminDomainComponent;
    let fixture: ComponentFixture<BudAdminDomainComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BudAdminDomainComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BudAdminDomainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
