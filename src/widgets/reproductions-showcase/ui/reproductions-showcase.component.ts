import {
    ChangeDetectionStrategy,
    Component,
    effect,
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
    private readonly country = effect(
        () => {
            if (!this.selectedCountry()) {
                this.store.selectCountry(this.store.countries()[0]);

                return;
            }

            this.store.selectCountry(this.selectedCountry() as string);
        },
        {
            allowSignalWrites: true,
        },
    );

    readonly store = inject(ReproductionsStore);
    readonly selectedCountry = input<string>();

    constructor() {
        this.store.loadReproductions();
    }
}
