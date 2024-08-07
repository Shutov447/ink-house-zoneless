import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IReproduction } from '../../lib';

@Injectable({
    providedIn: 'root',
})
export class ReproductionsService {
    constructor(private readonly http: HttpClient) {}

    getReproductions() {
        return this.http.get<IReproduction[]>('reproductions.json').pipe(
            catchError((error: unknown) => {
                return throwError(() => error);
            }),
        );
    }
}
