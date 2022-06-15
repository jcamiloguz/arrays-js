const words = ["ds", "ds", "extend", "sd", "ss"]

const newWords = words.filter((word) => word.length >= 6)

// console.log("original array: ", words)
// console.log("new array: ", newWords)

const orders = [
  { name: "pizza", price: 10, delivered: true },
  { name: "burger", price: 20, delivered: false },
  { name: "fries", price: 30, delivered: true },
  { name: "ice cream", price: 40, delivered: false },
  { name: "pasta", price: 50, delivered: true },
]

const search = (query) => {
  return orders.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })
}
console.log(search("e"))
