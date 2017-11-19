const AS_HIGH = 14
const AS_LOW = 1
const POKER = 5

const consecutivesNumbers = (arr) => {
  let consecutives = 1
  let i = 0
  let j = 1

  while (i < arr.length - 1 && j < arr.length) {
    let diff = arr[j] - arr[i]

    if (diff === 1) {
      consecutives++
      i++
      j++
    } else {
      return consecutives
    }
  }

  return consecutives
}

const isStraight = exports.isStraight = (cards) => {
  const myCards = cards.slice(0)

  myCards.sort((a, b) => a - b)

  const consecutives = consecutivesNumbers(myCards)

  if (consecutives >= POKER) return true

  if (consecutives === (POKER - 1)) {
    if (myCards.indexOf(AS_HIGH) !== -1) {
      const withOne = myCards.slice(0, -1)
      withOne.unshift(AS_LOW)
      return consecutivesNumbers(withOne) === POKER
    }
  }

  return false
}

const arrs = [
  [2, 3, 4 ,5, 6],
  [14, 5, 4 ,2, 3],
  [7, 7, 12 ,11, 3, 4, 14],
  [7, 3, 2]
]

for (let i = 0; i < arrs.length; i++) {
  console.log(isStraight(arrs[i]))
}
