export function sortByCountry<
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
