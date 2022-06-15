const letters = ["a", "b", "c", "d", "e"]

const newArray = letters.map((letter) => letter + "++")

// for (let i = 0; i < letters.length; i++) {
//   newArray.push(letters[i]+"++");
// }

console.log("original array: ", letters)
console.log("new array: ", newArray)
