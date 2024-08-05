import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('./home').then(({ HomeComponent }) => HomeComponent),
    },
    // {
    // path: 'not-found',
    // component: NotFoundComponent,
    // pathMatch: 'full',
    // },
    // {
    //     path: '**',
    //     redirectTo: 'not-found',
    // },
];
