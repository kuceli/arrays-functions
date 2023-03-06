// Question 1
// Mutating array methods change the array itself instead of returning a new array with the new changes. Some of these methods include: array.push(), array.reverse(), array.forEach(), array.sort(), array.splice().
// Whereas, Non - Mutating array methods return a whole new array which has all the changes. For instance, array.map(), array.concat(), array.includes(), array.indexOf, array.join().

// Question 2
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
// // Add ‘Kotlin’ to the end of the array
languages.splice(languages.length, 0, "Kotlin");
// // Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
// // Remove the first item in the array
languages.shift();
// // Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift");
// // Replace ‘PHP’ with ‘Go’ and ‘Rust’
// languages.splice(3, 1, "Go", "Rust"); //Using the original array from the question
languages.splice(5, 1, "Go", "Rust"); // Using the resulting array after performing all the operation
console.log(languages);

// Question 3
// Ideally, the value of fruit is supposed to be [ 'apple', 'mango', 'orange' ], where the item in index 2 of the array (banana) is being replaced by orange.
// However, the code would return a TypeError and to fix this to work as it should, the "fruit" parameter in the function should be removed as shown below.
// let fruit = ["apple", "mango", "banana"];
// function changeFruit() {
//   fruit[2] = "orange";
//   return fruit;
// }
// console.log(fruit);

// Question 4
const max = (x) => Math.max(...x);
console.log("Maximum value is " + max([4, 5, 10, -2]));

// Question 5
const valTimesIndex = (x) => {
  return x.map(function (value, index, array) {
    return value * index;
  });
};

console.log(valTimesIndex([1, 2, 3]));
console.log(valTimesIndex([5, 10, 15]));
