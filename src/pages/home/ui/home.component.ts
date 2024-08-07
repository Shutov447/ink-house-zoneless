import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BusinessCardComponent } from '@entities/business-card';
import { ReproductionsShowcaseComponent } from '@widgets/reproductions-showcase';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [BusinessCardComponent, ReproductionsShowcaseComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
