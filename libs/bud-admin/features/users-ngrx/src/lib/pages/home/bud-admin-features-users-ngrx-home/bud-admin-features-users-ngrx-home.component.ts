import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bud-admin-users-ngrx-home',
    templateUrl: './bud-admin-features-users-ngrx-home.component.html',
    styleUrls: ['./bud-admin-features-users-ngrx-home.component.scss'],
})
export class BudAdminFeaturesUsersNgrxHomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    captureFormData(data: any) {
        console.log(data);
    }
}
