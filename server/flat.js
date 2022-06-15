const matriz = [
  [1, 4, 6],
  [2, 5, 1],
  [7, 2, [1, ["x", "s"]]],
]

const recursiv = (array, accArray) => {
  for (let index = 0; index < array.length; index++) {
    const el = array[index]

    if (Array.isArray(el)) {
      accArray = recursiv(el, accArray)
    } else {
      accArray.push(el)
    }
  }
  return accArray
}

const recArray = recursiv(matriz, [])
const faltarray = matriz.flat(3)

console.log({ recArray, faltarray })
