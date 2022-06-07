const numbers = [1,2,3,4,5,5,6,7];
const limit = 5;
// function firstUnder(numbers, limit){
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] <= limit)
//   return numbers[i]
//     // return numbers.find(item => item < limit)
//   }
// }
const f = numbers.find(item => item <= limit) 
console.log(f)


// function startsWith(strings, letter){
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i][0] === letter)
//     return strings[i]
//   }
// }
const strings = ['tewrwe', 'ewrwsdgsg', 'ten']
const letter = 't'
const s = strings.find(item => item[0] === letter)
console.log(s)
