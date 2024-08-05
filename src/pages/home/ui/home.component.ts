import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BusinessCardComponent } from '@features/business-card';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [BusinessCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
