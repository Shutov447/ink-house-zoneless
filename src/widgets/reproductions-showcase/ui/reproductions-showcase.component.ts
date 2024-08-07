import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '@shared/ui';
import {
    ReproductionCardComponent,
    ReproductionsStore,
} from '@entities/reproductions';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-reproductions-showcase',
    standalone: true,
    imports: [ButtonComponent, ReproductionCardComponent, NgClass],
    templateUrl: './reproductions-showcase.component.html',
    styleUrl: './reproductions-showcase.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReproductionsShowcaseComponent {
    readonly store = inject(ReproductionsStore);

    constructor() {
        this.store.loadReproductions();
        this.store.selectCountry('германия');
    }
}
