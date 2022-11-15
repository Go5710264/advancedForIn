import propertySorting from '../index.js';

const newCharacter = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

const result = [
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 }
];

test('return sorted array', () => {
    expect(propertySorting(newCharacter, ['defence', 'level', 'name'])).toEqual(result)
});