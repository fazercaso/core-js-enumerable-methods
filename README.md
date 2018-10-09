# Отработка JavaScript: Методы по работе с массивом

## Резюме

Во время программирования мы часто работаем с коллекциями объектов: массивом телефонных номеров, списком имен, набором GPS-координат и т. д.

При работе с коллекциями объектов некоторые задачи являются очень распространенными. Например, мы часто перебираем массив, выполняя какие-нибудь операции с каждым элементом. Например, работая с массивом телефонных номеров, мы можем отправить текстовое сообщение на каждый номер телефона (см. Рис. 1).

```javascript
function sendText(number, message) {
  # Sends a text message to the number
}


phoneNumbers = ["+14195558916", "+14195557849", "+14195559789"]

phoneNumbers.forEach(function(number) {
  sendText(number, "You will do better in Toledo")
}
end
```
*Рисунок 1*. Итерация через массив номеров телефона, и проведение операции с каждым номером


Итерация массива является одной из общих задач при работе с коллекцией. Какие ещё задачи должны выполняться? Часто нам требуется вытащить один или несколько предметов из коллекции. Нам также может понадобиться найти определенный элемент, например, телефонный номер, заканчивающийся на 8916. Или мы можем выбрать подмножество элементов -  например, все номера телефонов из кода города 419.


### Перечисляемые методы

Работа с коллекциями объектов настолько распространена, что JavaScript и многие другие языки предоставляют методы, позволяющие сделать эти задачи более удобными. Общий метод повторения - `.forEach`, который мы используем, когда хотим сделать какое-то действие с каждым элементом массива. Чтобы использовать `.forEach`, мы вызываем метод в массиве и передаем туда блок, который определяет, что мы хотим сделать для каждого элемента массива. Рисунок 1 является примером использования `.forEach`.

Метод `.forEach` - очень мощный инструмент, и мы можем использовать его для достижения любых целей при работе с массивом. Однако JavaScript также предоставляет методы, созданные специально для выполнения рядовых задач. Некоторые из этих методов определяются в самом классе `Array`. Использование этих методов обычно позволяет сделать код более кратким и понятным. 


## Releases
### Release 0:  Поиск элемента в коллекции объектов
As mentioned in the *Summary*, one common task when working with a collection is to find a particular item: find the phone number ending in 8916, find the job applicant with the id 353687559, etc ...  To help us perform the task of finding an item in a collection, Ruby's `Enumerable` module provides the [`#find`][javascript find] method, which we're going to use.  We can see examples of using `#find` in Figure 2.

```javascript (нет в js)
numbers = [1, 2, 4, 5, 3, 9]

numbers.find { |number| number > 4 }
# => 5
nubmers.find { |number| number.even? }
# => 2
```
Рисунок 2. Поиск элемента в массиве.

In the file `find.js` we have a couple methods that find an element in an array.  The methods use `.forEach` to iterate.  Refactor the methods to use `#find` instead of `.forEach`.  Tests are provided in the file `spec/find_spec.js`.  We can use these tests to ensure that we don't break our code while refactoring.  Run:

```
 spec/find_spec.js
```


### Release 1:  Фильтрация коллекции объектов
Sometimes we want to find one specific item in a collection.  At other times we want to find all the items that meet a condition.  Or, that do not meet a condition.  For example, we might want to find all the phone numbers from area code 419, find all the job applicants who've not completed the entire application, etc.

This is often referred to as filtering.  We create a filter that describes how we'll decide which elements were interested in.  Then we run each item in the collection through the filter.  Once we've gone through all of the items, we return a new collection containing the items that "passed through the filter".

[`#select`][javascript select] and [`#reject`][javascript reject] are two Ruby methods that help us to filter collections.  When using either of these methods, we set up our filter in the block passed to the method.  `#select` returns a new array containing the items for which the filter returned a truthy value.  `#reject` does the opposite.  It returns a new array containing the items for which the filter returned a falsey value.  See Figure 3 for examples.

```javascript
numbers = [1, 5, 3, 8, 2]

numbers.filter(function(number){ return number < 5 })
# => [1, 3, 2]
numbers.filter(function(number){ return number % 2 == 0 })
# => [8, 2]
```
*Figure 3*. Filtering an array.

In the file `filter.js` we have a few methods that filter an array.  The methods use `.forEach` to iterate.  Refactor the methods to use either `#select` or `#reject`.  Tests are provided in the file `spec/filter_spec.js`.


### Release 2:  Преобразование элементов в коллекцию
Another common task is transforming items into something based on the items.  If we have an array of phone numbers, we might want to transform each of the numbers into its area code.  If we have a list of social security numbers, we might want to transform each of them into its last four digits.

JavaScript provides the [`#map`][javascript map] method to help with this task.  The method returns a new array.  The new array contains the transformed version of each of the original items.  The block passed to the method describes how to perform the transformation.  See Figure 4 for examples.

```javascript
numbers = [1, 4, 7, 3, 9]

numbers.map(function(number){ number ** 3 })
# => [1, 64, 343, 27, 729]

numbers.map(function(number){ number * -1 })
# => [-1, -4, -7, -3, -9]

numbers.map(function(number){ Math.sqrt(number) })
# => [1.0, 2.0, 2.6457513110645907, 1.7320508075688772, 3.0]
```
Рисунок 4. Отображение массива.

In the file `transform.js` we have a few methods that transform items in an array.  The methods use `.forEach` to iterate.  Refactor the methods to use `,map`.  Tests are provided in the file `spec/transform_spec.js`.


### Release 3:  Агрегатирование элементов в коллекции
The final task we'll explore is aggregating the items in a collection.  In other words, using the items to build an object or value.  If we had an array of prices, we could aggregate them into their total.  If we had an array of strings, we could aggregate them into one large string.  

One aggregating method that JavaScript provides is [`.reduce`][javascript reduce].  There are different ways to call `.reduce`.  One way is to pass in the starting point for the object that will be built up.  So, if we're going to sum an array of numbers, we might pass in zero as the starting value.  This value is often referred to as the *memo*.  We also pass a block.  Our block will need to take two arguments.  When the block is run for each item in the collection, both the item and the memo are passed to the block.  See Figure 5 for examples.

```javascript
numbers = [1, 3, 6, 3, 9]

numbers.reduce(function(sum, number) { return sum + number }, 0)
# => 22
numbers.reduce(function(sum, number) { return sum + number }, 100)
# => 122
numbers.reduce(function(digits, number) { return digits + number.to_s }, "Digits: ")
#=> "Digits: 13639"
numbers.reduce(function(counts, number) {
	counts[number] += 1;
	return counts;
}, {})
```
*Figure 5.*  Aggregating values in an array.

In the file `aggregate.js` we have a few methods that aggregate the values in an array.  The methods use `.forEach` to iterate.  Refactor the methods to use `.reduce`.  Tests are provided in the file `spec/aggregate_spec.js`.


### Release 4: Рефакторинг (реорганизация)  для использования перечисляемых методов

В предыдущих выпусках мы изучили некоторые распространенные перечисляемые методы и были вынуждены использовать их при рефакторинге (реорганизации). Мы будем продолжать выполнение рефакторинга кода для того, чтобы смочь использовать эти методы. Но для начала нам нужно выяснить, какой метод нам стоит использовать.

Как мы это выясним? Нам нужно будет прочитать про каждый из методов, для которого мы проводим рефакторинг (реорганизацию), чтобы выяснить, что же он делает. Как только мы поймем работу конкретного метода, мы должны суметь увидеть, является ли этот метод фильтрующим, преобразующим или агрегирующим. Когда мы читаем эти методы, то мы можем видеть паттерны в шаблонах кода, которые указывают на то, к какому типу мы можем отнести данный метод.

Методы, которые мы будем использовать, находятся в файле `working_with_enumerables.js`. Методы используют `.forEach` для итерации. Проведите рефакторинг методов использования перечисляемых методов, которые мы изучили в процессе выполнения этой задачи. Тесты можно найти в файле `spec/working_with_enumerables_spec.js`.


## Выводы
Мы будем работать с такими перечисляемыми объектами, как массивы. Время, затраченное на ознакомление с методами в модуле «Методы по работе с массивом», безусловно, будет хорошей инвестицией в Ваше будущее. Если у нас не будет возникать проблем при использовании метода ` .forEach`, то будет легко использовать его в любое время, когда мы будем работать с коллекцией объектов. 
По мере практики, использование перечисляемых методов станет для вас легко и естественно. 

[MDN Array]:(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


