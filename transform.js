function exclamations(strings){
  let loud_strings = []

  for (var i = 0; i < strings.length; i++) {
  loud_strings.push(array[i].toUpperCase() + '!')
  }
  return loud_strings
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
