import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { ButtonComponent } from '@shared/ui';
import {
    ReproductionCardComponent,
    ReproductionsStore,
} from '@entities/reproductions';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-reproductions-showcase',
    standalone: true,
    imports: [ButtonComponent, ReproductionCardComponent, TitleCasePipe],
    templateUrl: './reproductions-showcase.component.html',
    styleUrl: './reproductions-showcase.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReproductionsShowcaseComponent {
    readonly store = inject(ReproductionsStore);
    readonly selectedCountry = input('франция');

    constructor() {
        this.store.loadReproductions();
        this.store.selectCountry(this.selectedCountry());
    }
}
