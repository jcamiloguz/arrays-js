const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
]

const myProducts = []

console.log("products", products)
console.log("myProducts", myProducts)
console.log("-".repeat(10))
const productIndex = products.findIndex((item) => item.id === "🍔")

if (productIndex !== -1) {
  myProducts.push(products[productIndex])
  // products.splice(productIndex, 1)
}

console.log("products", products)
console.log("myProducts", myProducts)
console.log("-".repeat(10))

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "deli deli",
  },
}
const product2Index = products.findIndex((item) => item.id === update.id)

// products[product2Index] = { ...products[product2Index], ...update.changes }

console.log("products", products)
console.log("myProducts", myProducts)
console.log("-".repeat(10))

const newProduct = products.filter((item) => item.id !== "🍔")

const editProduct = products.map((item) => {
  if (item.id === update.id) {
    item = { ...item, ...update.changes }
  }
  return item
})

console.log("products", products)
console.log("newProduct", newProduct)
console.log("editProduct", editProduct)
console.log("myProducts", myProducts)
console.log("-".repeat(10))
