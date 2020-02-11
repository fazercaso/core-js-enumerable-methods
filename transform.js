function exclamations(strings){
  let loudStrings = []
  for (let i = 0; i < strings.length; i++) {
  loudStrings.push(strings[i].toUpperCase() + '!')
  }
  return loudStrings
}

function squareAll(numbers){
  let squares = []
  for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i]**2)
  }
  return squares
}

function firstLetters(words){
  let letters = []
  for (let i = 0; i < words.length; i++) {
     letters.push(words[i][0])
  }
  return letters
}
