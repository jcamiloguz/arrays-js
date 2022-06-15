const letters = ["a", "b", "c"]

for (let i = 0; i < letters.length; i++) {
  console.log("for ", letters[i])
}

letters.forEach((el) => console.log("for each", el))
