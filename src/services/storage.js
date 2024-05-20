const StorageBuilder = (storage) => ({
  setItem: (key, value) => storage.setItem(key, value),
  getItem: (key) => storage.getItem(key),
  removeItem: (key) => storage.removeItem(key)
});

export const storageService = {
  local: StorageBuilder(window.localStorage),
  session: StorageBuilder(window.sessionStorage)
};
