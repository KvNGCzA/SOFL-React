import formatDate from '../../../src/utils/formatDate';

const resultOne = formatDate('2018-10-09T15:23:17.437Z');
const resultTwo = formatDate('2018-01-09T15:23:17.437Z');

test('TEST formatDate() function', () => {
  expect(resultOne).toBe('09 Oct 2018');
  expect(resultTwo).toBe('09 Jan 2018');
});
