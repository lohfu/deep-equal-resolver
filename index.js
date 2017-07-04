'use strict';

const deepEqual = require('deep-equal');

module.exports = ({ prev = [], validate, moduleName = 'Untitled module' } = {}) => (obj) => {
  let result;

  result = prev.find((item) => deepEqual(item, obj));

  if (result) {
    return result;
  } else {
    if (validate) {
      const errors = validate(obj)

      if (errors && errors.length) {
        throw new Error(`Argument for "${moduleName}" is invalid: ${errors.join(', ')}`)
      }
    }

    prev.push(obj);

    return obj;
  }
};
