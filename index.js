'use strict';

const deepEqual = require('deep-equal');

module.exports = (prev = []) => (obj) => {
  let result;

  if (obj != null) {
    result = prev.find((item) => deepEqual(item, obj));
  }

  if (result) {
    return result;
  } else {
    if (obj != null) {
      prev.push(obj);
    }

    return obj;
  }
};
