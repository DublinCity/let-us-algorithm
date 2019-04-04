// const solution = (participants, completion) => {
//   const tempObj = {};
//   let name = '';
//   completion.forEach((item) => {
//     tempObj[item] = tempObj[item] ? tempObj[item] + 1 : 1;
//   });
//   participants.forEach((item) => {
//     if (tempObj[item]) {
//       tempObj[item] -= 1;
//     } else {
//       name = item;
//     }
//   });
//   return name;
// };

const solution = (participant, completion) => {
  const runnerMap = new Map();
  let name;
  completion.forEach((element) => {
    if (runnerMap.get(element)) {
      runnerMap.set(element, runnerMap.get(element) + 1);
    } else {
      runnerMap.set(element, 1);
    }
  });

  participant.forEach((element) => {
    if (runnerMap.get(element)) {
      runnerMap.set(element, runnerMap.get(element) - 1);
    } else {
      name = element;
    }
  });
  return name;
};

module.exports = solution;
