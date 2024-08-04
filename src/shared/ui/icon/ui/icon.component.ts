import { Component, input } from '@angular/core';
import { Color } from '../../../lib';
import { IconName } from '../lib';

@Component({
    selector: 'app-icon',
    standalone: true,
    imports: [],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
})
export class IconComponent {
    name = input.required<IconName>();
    color = input.required<Color>();
    noticesNumber = input.required<number>();
}
