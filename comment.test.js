import counterComments from './__mocks__/commentCounter.js';

describe('test on recipe comments', () => {
  test('comments count is two', () => {
    const arrayComments = [
      {
        comment: 'I love this recipe',
        creation_date: '2022-10-20',
        username: 'Kene',
      },
      {
        comment: 'I would to try this out',
        creation_date: '2022-10-20',
        username: 'Amin',
      },
    ];
    expect(counterComments(arrayComments)).toBe(2);
  });
});
