import { Component, ChangeDetectionStrategy, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { IUser } from '@bud-admin/domain';

@Component({
    selector: 'bud-admin-users-ngrx-form',
    templateUrl: './bud-admin-features-users-ngrx-form.component.html',
    styleUrls: ['./bud-admin-features-users-ngrx-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudAdminFeaturesUsersNgrxFormComponent implements OnChanges {
    @Input() public userDetails?: IUser | null | undefined;

    @Output() public updateUserFormData = new EventEmitter<IUser>();
    @Output() public saveUserFormData = new EventEmitter<IUser>();
    @Output() public undoUserForm = new EventEmitter<void>();

    public userForm: FormGroup = this.createUserForm();

    public get nameControl(): FormControl {
        return this.getControl('name') as FormControl;
    }

    public get emailControl(): FormControl {
        return this.getControl('email') as FormControl;
    }

    public get phoneNumbers(): FormArray {
        return this.getControl('phoneNumbers') as FormArray;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.hasUserDetailsChanged(changes) && this.userDetails) {
            this.populateForm(this.userDetails);
        }
    }

    public onBlur(controlName: string, index?: number): void {
        const control = this.getControlByNameOrIndex(controlName, index);
        if (control?.touched && control.valid) {
            this.updateUserFormData.emit(this.userForm.value);
        }
    }

    public addPhoneNumber(): void {
        this.phoneNumbers.push(new FormControl('', [Validators.required, Validators.minLength(8)]));
    }

    public removePhoneNumber(index: number): void {
        this.phoneNumbers.removeAt(index);
        this.updateUserFormData.emit(this.userForm.value);
    }

    public undoInput(): void {
        this.undoUserForm.emit();
        this.userForm.reset();
    }

    public onSubmit(): void {
        if (this.userForm.valid) {
            this.saveUserFormData.emit(this.userForm.value);
        }
    }

    private createUserForm(): FormGroup {
        return new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            phoneNumbers: new FormArray([]),
        });
    }

    private populateForm(userDetails: IUser): void {
        this.userForm.patchValue({
            name: userDetails.name || '',
            email: userDetails.email || '',
        });

        this.phoneNumbers.clear();
        userDetails.phoneNumbers?.forEach((phone) => this.phoneNumbers.push(new FormControl(phone, Validators.required)));
    }

    private getControl(controlName: string): FormControl | FormArray {
        return this.userForm.get(controlName) as FormControl | FormArray;
    }

    private getControlByNameOrIndex(controlName: string, index?: number): FormControl | undefined {
        if (controlName === 'phoneNumbers' && index !== undefined) {
            return this.phoneNumbers.at(index) as FormControl;
        }
        return this.getControl(controlName) as FormControl;
    }

    private hasUserDetailsChanged(changes: SimpleChanges): boolean {
        return !!(changes['userDetails'] && changes['userDetails'].currentValue);
    }
}
