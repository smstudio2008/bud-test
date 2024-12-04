import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'bud-ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() public label = 'Button';
    @Input() public type: 'primary' | 'secondary' = 'primary';
    @Input() public disabled = false;
    @Input() public icon?: string;

    @Output() public clicked: EventEmitter<void> = new EventEmitter<void>();

    public onClick(): void {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
