import TokenProvider from '../TokenProvider';

test('can set token provider token', () => {
  const tp = new TokenProvider();
  expect(tp.token).toBeUndefined();
  tp.setToken('qqq');
  expect(tp.token).toBe('qqq');
  tp.setToken(undefined);
  expect(tp.token).toBeUndefined();
});
