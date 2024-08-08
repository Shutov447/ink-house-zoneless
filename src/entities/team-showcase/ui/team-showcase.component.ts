import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-team-showcase',
    standalone: true,
    templateUrl: './team-showcase.component.html',
    styleUrl: './team-showcase.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamShowcaseComponent {
    readonly teamMembers = [
        'images/our-team/Ellipse-30.jpeg',
        'images/our-team/Ellipse-31.jpeg',
        'images/our-team/Ellipse-32.jpeg',
    ];
}
