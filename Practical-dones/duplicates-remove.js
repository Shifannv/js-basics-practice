const duplicates = [3, 3, 322, 555, 2, 21, 1, 1, 6, 667, 8, 89]
const balance = []

for (let i = 0; i < duplicates.length; i++) {
  const value = duplicates[i]
  
  let same = false
  for (let j = 0; j < balance.length; j++) {
    if (balance[j] === value) {
      same = true
    }
  } 

  if (!same) {
       balance.push(value)
  }
}

console.log(balance)