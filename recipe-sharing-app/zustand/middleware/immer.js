'use strict';

var immer$1 = require('immer');

const immerImpl = (initializer) => (set, get, store) => {
  store.setState = (updater, replace, ...a) => {
    const nextState = typeof updater === "function" ? immer$1.produce(updater) : updater;
    return set(nextState, replace, ...a);
  };
  return initializer(store.setState, get, store);
};
const immer = immerImpl;

exports.immer = immer;