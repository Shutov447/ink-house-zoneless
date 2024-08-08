import { sortByCountry } from './sortByCountry';

const countries = ['country1', 'country2'];
const targets = [
    {
        name: 'name1',
        country: 'country1',
    },
    {
        name: 'name2',
        country: 'country2',
    },
];

describe('sortByCountry', () => {
    it('должно вернуть Map со ключом страной и значением массива targets', () => {
        const map = new Map()
            .set(countries[0], [targets[0]])
            .set(countries[1], [targets[1]]);

        expect(sortByCountry(countries, targets)).toEqual(map);
    });
});
