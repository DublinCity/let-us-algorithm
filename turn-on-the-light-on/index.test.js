const getMinLight = require('./index');

const length = 5;
const light = [3, 4, 1];
const light1 = [2];

const length1 = 7;
const light11 = [2, 6, 7];

test('min light is', () => {
  expect(getMinLight(length, light)).toBe(1);
});
test('min light is', () => {
  expect(getMinLight(length, light1)).toBe(3);
});

test('min light is', () => {
  expect(getMinLight(length1, light11)).toBe(2);
});
