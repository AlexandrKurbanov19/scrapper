import { AuthEntitySnapshotIn, AuthEntity } from '../AuthEntity';
import TokenProvider from '../../../../../../infrastructureLayer/TokenProvider';

const snapshot: AuthEntitySnapshotIn = {
  token: '11111',
  userId: '22222',
};

test('AuthEntity view hasAuthToken', async () => {
  const tokenProvider = new TokenProvider();
  const authEntity = AuthEntity.create(snapshot, { tokenProvider });

  expect(authEntity.hasAuthToken).toBe(true);
  authEntity.setToken(undefined);
  expect(authEntity.hasAuthToken).toBe(false);
});

test('AuthEntity action clearState', async () => {
  const tokenProvider = new TokenProvider();
  const authEntity = AuthEntity.create(snapshot, { tokenProvider });

  expect(authEntity.token).toBe(snapshot.token);
  expect(authEntity.userId).toBe(snapshot.userId);
  authEntity.clearState();
  expect(authEntity.token).toBeUndefined();
  expect(authEntity.userId).toBeUndefined();
});

test('AuthEntity action removeToken', async () => {
  const tokenProvider = new TokenProvider();
  const authEntity = AuthEntity.create(snapshot, { tokenProvider });

  expect(authEntity.token).toBe(snapshot.token);
  authEntity.removeToken();
  expect(authEntity.token).toBeUndefined();
});

test('AuthEntity action setToken', async () => {
  const tokenProvider = new TokenProvider();
  const authEntity = AuthEntity.create(snapshot, { tokenProvider });

  expect(authEntity.token).toBe(snapshot.token);
  authEntity.setToken('yyy');
  expect(authEntity.token).toBe('yyy');
  authEntity.setToken(undefined);
  expect(authEntity.token).toBeUndefined();
});

test('AuthEntity action setUserId', async () => {
  const tokenProvider = new TokenProvider();
  const authEntity = AuthEntity.create(snapshot, { tokenProvider });

  expect(authEntity.userId).toBe(snapshot.userId);
  authEntity.setUserId('xxx');
  expect(authEntity.userId).toBe('xxx');
  authEntity.setUserId(undefined);
  expect(authEntity.userId).toBeUndefined();
});
