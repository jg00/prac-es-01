/* Sample template */

const handler = {
  get: (target, propName) => {
    return target[propName];
  },
  set: (target, propName, newValue) => {
    target[propName] = newValue;
  },
  has: (target, propName) => {
    return true;
  }

  // deprecated
  // enumerate: (target, propName) => {}
};
const proxy1 = new Proxy({}, handler);
