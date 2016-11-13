import Ember from 'ember';

const { getOwner, assign } = Ember;

export default function extractValue(desc) {
  return desc.value
    || (typeof desc.initializer === 'function' && desc.initializer());
}

function decorator(fn) {
  return function(...params) {
    return function(target, key, desc) {
      return assign({}, desc, {
        initializer() {
          const value = extractValue(desc);

          return fn.apply(null, params.concat(value));
        }
      });
    };
  };
}

function alias(methodName) {
  return function(...params) {
    return function(...args) {
      const lastIndex = params.length - 1;
      const fn = params[lastIndex];
      const metrics = getOwner(this).lookup('service:metrics');
      metrics[methodName](...params.slice(0, lastIndex));

      return fn.apply(this, args);
    };
  };
}

export const invoke = decorator(alias('invoke'));
export const trackPage = decorator(alias('trackPage'));
export const trackEvent = decorator(alias('trackEvent'));
