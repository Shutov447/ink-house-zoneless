import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/ui';

@Component({
    selector: 'app-business-card',
    standalone: true,
    imports: [ButtonComponent, RouterLink],
    templateUrl: './business-card.component.html',
    styleUrl: './business-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessCardComponent {}
