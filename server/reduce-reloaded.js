const numbers = [1, 3, 2, 3, 1]

const hist = numbers.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1
  return acc
}, {})

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "low",
  },
]

const levelsCount = data
  .map((item) => item.level)
  .reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1
    return acc
  }, {})

const getRange = (num) => {
  return `${Math.floor(num / 5) * 5}-${Math.ceil(num / 5) * 5}`
}
const numbersAdvance = [1, 3, 2, 3, 1, 9, 12, 17, 10, 5]

const ranges = numbersAdvance.reduce((acc, curr) => {
  acc[getRange(curr)] = acc[getRange(curr)] ? acc[getRange(curr)] + 1 : 1
  return acc
}, {})

console.log(ranges)
