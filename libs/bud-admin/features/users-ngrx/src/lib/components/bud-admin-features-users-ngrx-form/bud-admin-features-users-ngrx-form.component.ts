import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'bud-admin-users-ngrx-form',
    templateUrl: './bud-admin-features-users-ngrx-form.component.html',
    styleUrls: ['./bud-admin-features-users-ngrx-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudAdminFeaturesUsersNgrxFormComponent {
    @Output() public submitUserFormData: EventEmitter<any> = new EventEmitter<any>();

    public userForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    public get nameControl(): FormControl {
        return this.userForm.get('name') as FormControl;
    }

    public get emailControl(): FormControl {
        return this.userForm.get('email') as FormControl;
    }

    public onBlur(controlName: string): void {
        const control = this.userForm.get(controlName) as FormControl;
        if (control.touched && control.valid) {
            console.log(`${controlName}:`, control.value);
        }
    }

    public onSubmit(): void {
        if (this.userForm.valid) {
            this.submitUserFormData.emit(this.userForm?.value);
        }
    }
}
