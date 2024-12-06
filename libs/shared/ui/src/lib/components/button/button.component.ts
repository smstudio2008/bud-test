import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { NgClass } from '@angular/common';

@Component({
    selector: 'bud-ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    imports: [NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() public label = 'Button';
    @Input() public type: 'primary' | 'secondary' = 'primary';
    @Input() public buttonSize?: 'small' | 'medium' | 'large' = 'medium';
    @Input() public disabled: boolean | undefined = false;

    @Output() public clicked: EventEmitter<void> = new EventEmitter<void>();

    public onClick(): void {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
