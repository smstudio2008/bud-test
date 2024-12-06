import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { JsonPipe, NgFor } from '@angular/common';

import { IUser } from '@bud-admin/domain';
import { UserStore } from '../../services/user-signalStore/user-store.service';

@Component({
    selector: 'bud-admin-users-signals-home',
    templateUrl: './bud-admin-features-users-signal-home.component.html',
    styleUrls: ['./bud-admin-features-users-signal-home.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgFor, JsonPipe],
    providers: [UserStore],
})
export class BudAdminFeaturesUsersSignalHomeComponent implements OnInit {
    public userForm: FormGroup;

    constructor(public userStore: UserStore) {
        this.userForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            phoneNumbers: new FormArray([]),
        });
    }

    public get phoneNumbers(): FormArray {
        return this.userForm.get('phoneNumbers') as FormArray;
    }

    public ngOnInit(): void {
        const user = this.userStore.user();

        if (user) {
            this.populateForm(user);
        }
    }

    public onUpdateUser(): void {
        const updatedUser: IUser = this.userForm.value;
        this.userStore.updateUser(updatedUser);
    }

    public removePhoneNumber(index: number): void {
        this.phoneNumbers.removeAt(index);
    }

    public addPhoneNumber(): void {
        const phoneNumbers = this.userForm.get('phoneNumbers') as FormArray;
        phoneNumbers.push(new FormControl('', Validators.required));
    }

    private populateForm(user: IUser): void {
        this.userForm.patchValue({
            name: user.name,
            email: user.email,
        });

        const phoneNumbers = this.userForm.get('phoneNumbers') as FormArray;
        phoneNumbers.clear();
        user.phoneNumbers.forEach((phone) => phoneNumbers.push(new FormControl(phone, Validators.required)));
    }
}
