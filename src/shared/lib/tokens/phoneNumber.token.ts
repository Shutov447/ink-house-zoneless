import { InjectionToken } from '@angular/core';

export const PHONE_NUMBER = new InjectionToken('phoneNumber', {
    providedIn: 'root',
    factory: () => '+7 (999) 543-54-54',
});
