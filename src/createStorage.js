const createStorage = provider => ({
  get(key, defaultValue) {
    const json = provider.getItem(key);

    const defaultVal = typeof defaultValue === 'function'
      ? defaultValue()
      : defaultValue;

    try {
      // eslint-disable-next-line no-nested-ternary
      return json === null || typeof json === 'undefined'
        ? defaultVal
        : JSON.parse(json);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return defaultVal;
    }
  },
  set(key, value) {
    provider.setItem(key, JSON.stringify(value));
  },
});

export default createStorage;
