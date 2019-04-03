const {rotate, loopFunc, hasElement} = require('./utils')
const answerFunc = require('./index')

const arr = [3,4,5,6,7]
const arr1 = [4,5,6,7,3]
const arr2 = [5,6,7,3,4]
const arr3 = [5,6,7,3]
const arr4 = [6,5,7,3,4]

const dArr = [[1,2],[3,2]]
const dArrEl1 = [3,2]
const dArrEl2 = [2,3];;;



describe(`${arr} is rotated`, () => {
  test('once: ', () => {
    expect(rotate(arr)).toEqual(arr1)
  })
  test('twice: ', () => {
    expect(rotate(arr1)).toEqual(arr2)
  })
})

describe(`${arr} is looped`, () => {
  const rotateLoop = loopFunc(rotate);

  test('it has array length', () => {
    expect(rotateLoop(arr)).toHaveLength(arr.length)
  })

  test('its last array is', () => {
    expect(rotateLoop(arr)[arr.length-1]).toEqual([7,3,4,5,6])
  })

  test('its first array is', () => {
    expect(rotateLoop(arr)[0]).toEqual([3,4,5,6,7])
  })
})

describe(`${dArr} has`, () => {
  test(`${dArrEl1}`, () => {
    expect(hasElement(dArr,dArrEl1)).toBe(true)
  })

  test(`not ${dArrEl2}`, () => {
    expect(hasElement(dArr,dArrEl2)).toBe(false)
  })
})

describe(`${arr} is rotated with`, () => {

  test(`${arr1}`, () => {
    expect(answerFunc(arr, arr1)).toBe(true)
  })

  test(`${arr2}`, () => {
    expect(answerFunc(arr,arr2)).toBe(true)
  })

  test(`${arr3}`, () => {
    expect(answerFunc(arr,arr3)).toBe(false)
  })

  test(`${arr4}`, () => {
    expect(answerFunc(arr,arr4)).toBe(false)
  })
  
})