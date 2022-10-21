import { loadResult } from './src/modules/model.js';
// eslint-disable-next-line spaced-comment
/*eslint linebreak-style: ["error", "windows"]*/

describe('Test for Items Counter', () => {
  test('Test Items counter', () => {
    expect(loadResult()).toBeDefined();
  });
});
