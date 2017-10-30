'use strict';

module.exports = (emitter, event) => {
  new Promise((resolve, reject) => {
    emitter.on(event, (...args) => {
      resolve(...args);
    });
  });
};