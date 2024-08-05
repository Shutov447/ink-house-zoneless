import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Color } from '@shared/lib';
import { NavbarComponent } from '@widgets/navbar';

@Component({
    standalone: true,
    imports: [RouterModule, NavbarComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly color = Color.OldGold;
}
