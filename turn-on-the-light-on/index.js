const getMinLight = (len, arr) => {
  arr.sort();
  let initialValue = Math.max(len - arr[arr.length - 1], arr[0]);
  for (let i = 0; i < arr.length - 1; i += 1) {
    const distance = Math.ceil((arr[i + 1] - arr[i]) / 2);
    initialValue = Math.max(distance, initialValue);
  }
  return initialValue;
};

module.exports = getMinLight;
