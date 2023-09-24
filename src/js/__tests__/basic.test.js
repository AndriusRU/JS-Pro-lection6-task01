import orderByProps from '../basic';

const element = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const orderSort = [
  'name', 'level',
];

const correctResult = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('sort properties of person', () => {
  const result = orderByProps(element, orderSort);
  expect(result).toEqual(correctResult);
});
