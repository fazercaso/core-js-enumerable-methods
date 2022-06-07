
// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);


function myForEach(arr, func) {
    for(let i = 0; i < arr.length; i += 1) {
        func(arr[i]);
    }
    return arr

}
// myForEach([1,2,3], (el) => console.log(el*2));

function myMap(arr, func) {
    const newArr = [];
    for(let i = 0; i < arr.length; i += 1) {
         newArr.push(func(arr[i]));
    }
    return newArr

}
// myMap([1,2,3], (el) => console.log(el * 2));

function myFilter(arr, func) {
    const newArr = [];
    for(let i = 0; i < arr.length; i += 1) {
        if(func(arr[i]))
        newArr.push(arr[i])

    } 
    return newArr

}
// console.log(myFilter([1,2,3], (el) => (el > 2)));

function myFind(arr, func) {
    for(let i = 0; i < arr.length; i += 1) {
        if(func(arr[i]))
        return arr[i]
    }
}
// console.log(myFind([1,2,3], (el) => (el > 0)));

function myEvery(arr, func) {
    for(let i = 0; i < arr.length; i += 1) {
        if(!func(arr[i])){
            return false
        }
        return true
    }
    

}
// console.log(myEvery([1,2,3], (el) => (el < 4)));

function mySome(arr, func) {
    for(let i = 0; i < arr.length; i += 1) {
        if(func(arr[i])){
         return true
        } 
        
    } return false
    

}
// console.log(mySome([1,2,3], (el) => (el > 2)));

function myReduce(arr, func, count) {
    let acc = count || arr[0];
    let safe = count ? 0 : 1;
    for(let i = safe; i < arr.length; i += 1) {    
       acc = func(acc, arr[i])
    } return acc
} 
console.log(myReduce([1,2,3,4], (acc, el) => acc + el, 3));
console.log(myReduce([1,2,3,4], (acc, el) => acc + el, 2));

