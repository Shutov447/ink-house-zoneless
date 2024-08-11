import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
        '[style.background-image]': 'bgImage()',
    },
})
export class BannerAdComponent {
    readonly color = Color.WildRice;
    readonly title = input.required<string>();
    readonly texts = input.required<string[]>();
    readonly bgImage = input.required({
        transform: (value: string) => `url(${value})`,
    });
}
