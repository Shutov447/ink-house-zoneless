import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '@shared/ui';
import { NgClass } from '@angular/common';
import { IReproduction } from '../lib';

@Component({
    selector: 'app-reproduction-card',
    standalone: true,
    imports: [ButtonComponent, NgClass],
    templateUrl: './reproduction-card.component.html',
    styleUrl: './reproduction-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReproductionCardComponent {
    readonly reproduction = input.required<IReproduction>();
}
