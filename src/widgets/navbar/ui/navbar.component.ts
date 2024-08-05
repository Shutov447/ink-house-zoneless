import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Color } from '@shared/lib';
import { IconComponent } from '@shared/ui';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, IconComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    readonly Laurel = Color.Laurel;
    readonly BlackRock = Color.BlackRock;
}
