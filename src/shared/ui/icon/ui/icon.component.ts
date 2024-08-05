import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Color } from '../../../lib';
import { IconName } from '../lib';

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    readonly name = input.required<IconName>();
    readonly color = input.required<Color>();
    readonly noticesNumber = input<number>();
}
