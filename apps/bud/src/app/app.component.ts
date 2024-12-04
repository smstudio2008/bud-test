import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgOptimizedImage } from '@angular/common';

import { ButtonComponent } from '@bud/ui';

@Component({
    standalone: true,
    imports: [RouterModule, NgOptimizedImage, ButtonComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;

                .title--bud {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                }
            }
        `,
    ],
})
export class AppComponent {
    title = 'Bud';
}
