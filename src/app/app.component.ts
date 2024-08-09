import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReproductionsStore } from '@entities/reproductions';
import { FooterComponent } from '@widgets/footer';
import { NavbarComponent } from '@widgets/navbar';

@Component({
    standalone: true,
    imports: [RouterModule, NavbarComponent, FooterComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    private readonly store = inject(ReproductionsStore);

    constructor() {
        this.store.loadReproductions();
    }
}
