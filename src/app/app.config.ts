import { provideAnimations } from '@angular/platform-browser/animations';
import {
    ApplicationConfig,
    provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
    provideHttpClient,
    withFetch,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { appRoutes } from '@pages/pages.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideExperimentalZonelessChangeDetection(),
        provideRouter(appRoutes),
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
    ],
};
