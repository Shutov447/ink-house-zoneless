import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withState,
} from '@ngrx/signals';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { IReproduction } from '../lib';
import { ReproductionsService } from '../api';

function sortByCountry<
    T extends readonly { country: string }[] | { country: string }[],
>(countries: readonly string[] | string[], targets: T): Map<string, T> {
    const map = new Map<string, T>();

    countries.forEach((country) => {
        const sortedTargets: unknown = [];

        targets.forEach((target) => {
            if (target.country === country) {
                (sortedTargets as { country: string }[]).push(target);
            }
        });

        map.set(country, sortedTargets as T);
    });

    return map;
}

interface IReproductionsState {
    reproductions: readonly IReproduction[];
    countries: readonly string[];
    selectedCountry: string | null;
    isLoading: boolean;
}

const ReproductionsInitialState: IReproductionsState = {
    reproductions: [],
    countries: [],
    selectedCountry: null,
    isLoading: false,
};

export const ReproductionsStore = signalStore(
    { providedIn: 'root' },
    withDevtools('Reproductions'),
    withState(ReproductionsInitialState),
    withComputed(({ countries, reproductions }) => ({
        reproductionsByCountries: computed(() =>
            sortByCountry(countries(), reproductions()),
        ),
    })),
    withMethods((store) => ({
        selectCountry(selectedCountry: string) {
            patchState(store, () => ({ selectedCountry }));
        },
    })),
    withMethods(
        (store, reproductionsService = inject(ReproductionsService)) => ({
            loadReproductions: rxMethod<void>(
                pipe(
                    debounceTime(300),
                    distinctUntilChanged(),
                    tap(() => patchState(store, { isLoading: true })),
                    switchMap(() => {
                        return reproductionsService.getReproductions().pipe(
                            tapResponse({
                                next: (reproductions) => {
                                    const countries = [
                                        ...new Set(
                                            reproductions.map(
                                                ({ country }) => country,
                                            ),
                                        ),
                                    ];

                                    patchState(store, { countries });
                                    patchState(store, {
                                        reproductions,
                                    });
                                },
                                error: () => console.error,
                                finalize: () =>
                                    patchState(store, { isLoading: false }),
                            }),
                        );
                    }),
                ),
            ),
        }),
    ),
);
