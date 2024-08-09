import { TitleCasePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReproductionsStore } from '@entities/reproductions';
import { Color, PHONE_NUMBER } from '@shared/lib';
import { IconComponent } from '@shared/ui';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [IconComponent, TitleCasePipe, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    private readonly store = inject(ReproductionsStore);
    readonly phoneNumber = inject(PHONE_NUMBER);

    readonly laurel = Color.Laurel;
    readonly blackRock = Color.BlackRock;
    readonly lists = computed(() => [
        {
            title: 'Репродукции',
            items: this.store.countries(),
        },
        {
            title: 'Новинки',
            items: ['2021', '2020'],
        },
        {
            title: 'О нас',
            items: ['Художники', 'Менеджеры'],
        },
    ]);
}
