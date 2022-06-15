const totals = [1, 2, 3, 4]

const final = totals.reduce((acc, curr) => {
  return acc + curr
}, 0)

console.log(final)
