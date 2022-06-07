// function sum(arrayNumbers, sum = 0){
//   // for (let i = 0; i < arrayNumbers.length; i++ ){
//   //   sum += arrayNumbers[i];
//   // }
//   return sum
// }
const sum = 13
const arrayNumbers = [2,4,5,34,65,68,967]
const s = arrayNumbers.reduce((arrayNumbers, summ) => arrayNumbers + summ,sum)
console.log(s)
