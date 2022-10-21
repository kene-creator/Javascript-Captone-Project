import { loadResult } from './src/modules/model.js';

describe('Test for Items Counter', () => {
  test('Test Items counter', () => {
    expect(loadResult()).toBeDefined();
  });
});
