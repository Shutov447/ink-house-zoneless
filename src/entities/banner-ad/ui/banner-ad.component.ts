import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
} from '@angular/core';
import { Color } from '@shared/lib';
import { ButtonComponent, IconComponent } from '@shared/ui';

@Component({
    selector: 'app-banner-ad',
    standalone: true,
    imports: [IconComponent, ButtonComponent],
    templateUrl: './banner-ad.component.html',
    styleUrl: './banner-ad.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.background-image]': 'formattedBgImage()',
    },
})
export class BannerAdComponent {
    readonly color = Color.WildRice;
    readonly title = input.required<string>();
    readonly texts = input.required<string[]>();
    readonly bgImage = input.required<string>();
    readonly formattedBgImage = computed(() => `url(${this.bgImage()})`);
}
