const numbers = [1, 30, 49, 16, 24, 20]

const everyIsLowerThan40 = numbers.every((item) => {
  return item <= 40
})

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 12,
  },
  {
    name: "Santiago",
    age: 18,
  },
]

const youngerThan15 = team.every(({ age }) => age >= 8)

console.log(youngerThan15)
