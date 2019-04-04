const solution = require('./index');

const runner1 = ['leo', 'kiki', 'eden'];
const finishedRunner1 = ['eden', 'kiki'];

const runner2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const finishedRunner2 = ['josipa', 'filipa', 'marina', 'nikola'];

const runner3 = ['mislav', 'stanko', 'mislav', 'ana'];
const finishedRunner3 = ['stanko', 'ana', 'mislav'];

describe('#예제 1', () => {
  test('leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.', () => {
    expect(solution(runner1, finishedRunner1)).toEqual('leo');
  });
});

describe('#예제 2', () => {
  test('vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.', () => {
    expect(solution(runner2, finishedRunner2)).toEqual('vinko');
  });
});

describe('예제 #3', () => {
  test('mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.', () => {
    expect(solution(runner3, finishedRunner3)).toEqual('mislav');
  });
});
