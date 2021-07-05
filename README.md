##Array methods

During development, we often work with collections of objects: an array of phone numbers, a list of names, a set of GPS coordinates, etc.

When we work with collections of objects, some operations are very common. For example, we often go through an array with performing some kind of operation on each element. For example, working with an array of phone numbers, we can send a text message to each phone number (see code below).

```javascript
function sendText(number, message) {
  // Sends a text message to the number
}


let phoneNumbers = ["+14195558916", "+14195557849", "+14195559789"]

phoneNumbers.forEach(function(number) {
  sendText(number, "Come to Elbrus-Bootcamp!)
})
```
*Iterate through an array of phone numbers, and perform an operation on each number*

Array iteration is one of the common tasks when working with a collection. What other tasks need to be performed? Often we need to pull one or more items from an array. Sometimes we may need to find a particular item, such as a phone number ending in 8916. Or we need to select a subset of items, for example: all phone numbers with a 495 area code.


## Searching methods.

Working with collections of objects is so common that JavaScript and many other languages provide special methods for doing this. A common enumeration method is `.forEach()`, which we use when we want to do something with each element of an array. To use `.forEach()`, we need to call this array method and pass a function that defines what we want to do with each element of the array. The code above is an example of using `.forEach()`.

The `.forEach()` method is a very powerful tool, and you can use it to achieve almost any goal when working with an array. However, JavaScript also provides methods designed specifically to accomplish ordinary tasks. Using these methods usually makes your code shorter and clearer.

### Release 0. Own functions `map`, `filter`, `reduce`, `forEach`, `every`, `some`, `find` 

Write your own functions that do the same thing as the functions `map`, `filter`, `reduce`, `forEach`, `every`, `some`, `find`.
Open the file `codeYourMethods.js` and implement your own way of doing the above functions.

Think about how the user will use your functions. Notice the comments at the end of the file.

### Release 1. Finding an element in an array
As mentioned above, one of the tasks when working with an array is to find a specific element: for example, find a phone number ending in 8916, find a job candidate with ID 353687559, etc. To help you with accomplishing such tasks as finding an element in an array, there is a method [`.find`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find). Examples of using `.find' can be seen in the code below.

```javascript
let numbers = [1, 2, 4, 5, 3, 9];

numbers.find(function(number) { 
  return number > 4 
});
// => 5
numbers.find(function(number) { 

  return number % 2 === 0 
});
// => 2
```
*Search for an element in an array*

In the file `find.js`, here are several functions that do searching an element in the array. Rewrite the functions using `.find()`.

### Release 2. Filtering an array

Sometimes you need to find several elements in an array. For example, all items matching or not matching  the given conditions. We can find all phone numbers with a 495 area code, find all job candidates who didn't fill out the entire application, etc.

This process is often called filtering. First, we create a filter that describes how we will decide which items we are interested in. Then we pass each element to the array through the filter. When we pass all the elements, we get a new array that consists of the elements that have been passed through the filter.

`.filter()` is a JavaScript method that helps us filter the array. ``.filter()`` returns a new array containing the elements for which the filter returned a true value.

```javascript
let numbers = [1, 5, 3, 8, 2];

numbers.filter(function(number) { 
  return number < 5 
});
// => [1, 3, 2]
numbers.filter(function(number) { 
  return number % 2 === 0 
});
// => [8, 2]
```
*Filtering the array*

In the file `filter.js`, you have a function that filters an array. Rewrite it using `.filter()`.

### Release 3. Transforming array elements.

Another common task is to convert the elements of an array. If we have an array of phone numbers, we can convert each number to an area/region code. If we have a list of Social Security numbers, we can convert each one to their last four digits.

There is a method `.map()` to solve this problem. The method returns a new array. The new array contains the converted version of each of the original elements.The function passed to the method describes how to perform the conversion.

```javascript
let numbers = [1, 4, 7, 3, 9];

numbers.map(function(number) { 
  return number ** 3 
});
// => [1, 64, 343, 27, 729]

numbers.map(function(number) { 
  return number * -1 
});
// => [-1, -4, -7, -3, -9]

numbers.map(function(number) { 
  return Math.sqrt(number) 
});
// => [1.0, 2.0, 2.6457513110645907, 1.7320508075688772, 3.0]
```
*Displaying an array*

The `transform.js' file contains several functions. Rewrite them using `.map()`.


### Release 4. Aggregating elements in an array

One more task we are going to review is aggregating the elements of an array to the same value. In other words, we need to build an object or value, using the elements. If we had, for example, an array of product prices, we could aggregate them into a purchase price. Similarly, if we had an array of strings, we could combine them into one big string.

JavaScript provides `.reduce()` method. `.reduce()` takes a function-callback and an initial accumulator value (a variable storing intermediate values of the result) as input. The function takes two arguments (`accumulator, currentItem`), so `accumulator` here is the previous result of the function. Let's go to examples and everything will become clearer: 

```javascript
let numbers = [1, 3, 6, 3, 9];

numbers.reduce(function(sum, number) { 
  return sum + number 
  }, 0);
// => 22

numbers.reduce(function(sum, number) { 
  return sum + number   
}, 100);
// => 122

numbers.reduce(function(digits, number) { 
  return digits + number
}, "Digits: ");
// => "Digits: 13639"

numbers.reduce(function(counts, number) {
	counts[number] = counts[number] ? counts[number] + 1 : 1;
	return counts;
}, {});
// => 
// {
// '1': 1, 
// '3': 2, 
// '6': 1, 
// '9': 1
// }
```
*Agggregating values in an array*

In the file `aggregate.js`, you have several functions that aggregate values in an array. Refactor (reorganize) the functions using `.reduce()`.


[MDN Array]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
[Enumerating methods]:(https://learn.javascript.ru/array-iteration) (rus)

