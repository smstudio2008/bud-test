import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'bud-ui-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, NgFor, ButtonComponent, NgOptimizedImage],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() public title = '';
    @Input() public content: string | undefined = '';
    @Input() public imageUrl?: string;
    @Input() public actions?: string[];

    @Output() public actionClick: EventEmitter<string> = new EventEmitter<string>();

    public onActionClick(action: string): void {
        this.actionClick.emit(action);
    }
}
