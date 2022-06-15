const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
]

const element = products.find((item) => item.id === "🍔")
const elementIndex = products.findIndex((item) => item.id === "🍔")

console.log(element)
console.log(elementIndex)
