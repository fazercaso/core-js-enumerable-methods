function sum(arrayNumbers, starting_value = 0){
  let sum = 0;
  for (let i = starting_value; i < arrayNumbers.length; i++ ){
    sum += arrayNumbers[i];
    }
    return sum
}
