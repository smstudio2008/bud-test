import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'bud-ui-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    @Input() public inputControl: any;
    @Input() public placeholder = 'Enter text';
    @Input() public type = 'text';

    @Output() public blurEvent = new EventEmitter<void>();

    public handleBlur(): void {
        this.blurEvent.emit(); // Emit the blur event to the parent
    }
}
