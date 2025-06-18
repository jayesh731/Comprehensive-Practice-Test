// 2. Data Types
// JavaScript is dynamically typed, meaning variables can hold any type of data without explicit type declaration. There are two categories: primitive and reference types.

// primitive - String, number, Boolean, null, undefined
// reference - Array,Object

// JavaScript Functions
// Functions are reusable blocks of code that perform specific tasks, often taking input (parameters) and producing output (return values)

// Closures
// A closure is a function that retains access to its outer (lexical) scope’s variables, even after the outer function has finished executing.
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// Higher-Order Functions
// Functions that take other functions as arguments or return functions.
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const result = applyOperation(10, 20, (a, b) => a + b);
console.log(result);

// Callbacks
// Functions passed as arguments to be executed later, often used for asynchronous operations.
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}
// fetchData(message => alert(message));

// call, apply, bind

// // call
// const person = {name : "jayesh"};
// function sayHello(){
//     console.log(this.name)
// }
// sayHello.call(person)

// bind
// const person = { name: "jayesh" };
// function sayHello() {
//   console.log(this.name);
// }
// const call = sayHello.bind(person);
// call();

function sumAll() {
  let total = 0;
  for (let arg of arguments) {
    total += arg;
  }
  return total;
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Object : Objects in JavaScript are collections of key-value pairs, where values can be data (properties) or functions (methods). They are fundamental for structuring data and behavior.

// Object.defineProperty (for fine-grained control)
// Object.defineProperty(person, "id", {
//     value: "12345",
//     writable: false, // Cannot be modified
//     enumerable: true, // Shows in loops
//     configurable: false // Cannot be deleted
// });

// The this Keyword
// this refers to the context in which a function is executed, typically the object owning the method.
// const person = {
//     name : "jayesh bhalala",
//     print: function (){
//         console.log(this.name)
//     }
// }
// person.print

/* // Destructuring
const person = { name: "Alice", age: 25, city: "New York",};
const { name: personName, city, country = "USA" } = person;
console.log(personName, city, country); // Output: Alice New York USA

// nested Destructuring
const user = { id: 1, info: { name: "Bob", age: 30 } };
const {info: {name,age}} = user;
console.log(name, age) */

const str = new String("Hello"); // Creates a String object (not a primitive)
console.log(str); // Output: [String: 'Hello']