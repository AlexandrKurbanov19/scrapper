import { AuthStore, AuthStoreModelSnapshotIn } from '../AuthStore';

const snapshot: AuthStoreModelSnapshotIn = {
  hydrated: true,
  auth: {
    token: '11111',
    userId: '22222',
  },
};

test('AuthStore action setHydrated', async () => {
  const authStore = AuthStore.create(snapshot);

  expect(authStore.hydrated).toBe(true);
  authStore.setHydrated(false);
  expect(authStore.hydrated).toBe(false);
});
