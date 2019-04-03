const rotate = arr => [...arr.slice(1), arr[0]];

const loopFunc = func => (arr) => {
  const result = [[...arr]];
  let rawArr = [...arr];

  for (let i = 0; i < arr.length - 1; i += 1) {
    rawArr = func(rawArr);
    result.push(rawArr);
  }
  return result;
};


const equal = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const hasElement = (dArr, el) => {
  for (let i = 0; i < dArr.length; i += 1) {
    if (equal(dArr[i], el)) {
      return true;
    }
  }
  return false;
};


module.exports = {
  rotate, loopFunc, hasElement,
};
