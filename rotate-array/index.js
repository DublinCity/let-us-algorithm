const { loopFunc, rotate, hasElement } = require('./utils');

const answerFunc = (arr, arr1) => {
  const rotateLoop = loopFunc(rotate);
  const result = rotateLoop(arr);
  const bool = hasElement(result, arr1);
  return bool;
};

module.exports = answerFunc;
