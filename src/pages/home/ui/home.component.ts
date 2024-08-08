import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerAdComponent } from '@entities/banner-ad';
import { BusinessCardComponent } from '@entities/business-card';
import { ReproductionsShowcaseComponent } from '@widgets/reproductions-showcase';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        BusinessCardComponent,
        ReproductionsShowcaseComponent,
        BannerAdComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    readonly bannerAdData = {
        title: 'Новая коллекция французских авторов',
        texts: [
            `Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
            которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.`,
            `Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
            востребованность направлений прогрессивного развития.`,
        ],
        bgImage: 'images/bg-new-france-collection.png',
    };
}
