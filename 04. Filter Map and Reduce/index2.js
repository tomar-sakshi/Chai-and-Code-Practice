//****************************Questions *********************************//

//Map
//Q1- Convert an array of numbers into their squares.
//Ans-

// const numbers = [2, 3, 6, 9, 4];
// const squares = numbers.map((num) => num * num);
// console.log(squares);

//Q2- Convert an array of numbers into cubes.
//Ans-

// const numbers = [1, 2, 4, 6, 7];
// const cubes = numbers.map((num) => num ** 3);
// console.log(cubes);

//Q3- Convert an array of names to uppercase.
//Ans-

// const arr = ["Sakshi", "Shagun", "Tanu"];
// const output = arr.map((elm) => elm.toUpperCase());
// console.log(output);

//Q4- Add 10 to each number in an array.
//Ans-

// const arr = [5, 10, 15, 20];
// const output = arr.map((elm) => elm + 10);
// console.log(output);

//Q5- Convert an array of prices to include ₹ symbol (e.g., 100 → "₹100").
//Ans-

// const prices = [100, 200, 300, 400];
// const output = prices.map((price) => {
//   return `₹${price}`;
// });
// console.log(output);

//Q6- Extract only the first letter of each word in an array.
// Ans-

// const words = ["Apple", "Banana", "Cherry"];
// const firstLetter = words.map((word) => word[0]);
// console.log(firstLetter);

//Q7 - Convert an array of objects {name, age} into an array of names only.
// Ans-

// const user = [
//   { name: "Sakshi", age: 24, marks: 87 },
//   { name: "Shagun", age: 26, marks: 94 },
//   { name: "Tanu", age: 28, marks: 88 },
// ];
// const output = user.map((user) => user.name);
// console.log(output);

//Filter

//Q8- Get all even numbers from an array.
// Ans-
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumber = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumber);

//Q9- Get all numbers greater than 50.
//Ans-
// const numbers = [20, 30, 40, 50, 60, 70, 80];
// const output = numbers.filter((number) => number > 50);
// console.log(output);

//Q10- Filter out all negative numbers.
//Ans-
// const numbers = [1, 2, 3, -1, -2, -3, 4, -4, 5, -6];
// const negativeNumbers = numbers.filter((number) => number <= 0);
// console.log(negativeNumbers);

//Q11- Get all strings longer than 5 characters.
//  Ans-
// const words = [
//   "Tanu",
//   "Sakshi",
//   "Kajal",
//   "Shagun",
//   "Aditi",
//   "Saloni",
//   "Priyanshi",
// ];
// const longWords = words.filter((word) => {
//   return word.length > 5;
// });
// console.log(longWords);

//Q12- Filter users with age greater than 18.
// Ans-
// const users = [
//   { name: "Sakshi", age: 24 },
//   { name: "Shagun", age: 16 },
//   { name: "Tanu", age: 18 },
// ];

// const output = users.filter((user) => user.age > 18);
// console.log(output);

//Q13-Get only odd numbers from an array.
// Ans-
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumber = numbers.filter((number) => number % 2 !== 0);
// console.log(oddNumber);

//Q14- Remove all falsy values (false, 0, "", null, undefined)
// Ans-
// const arr = [0, "hello", false, "", 25, null];
// const truthyValues = arr.filter(Boolean);
// console.log(truthyValues);

// Reduce
// Q15- Find the sum of all numbers in an array
// //Ans-
// let arr = [2, 3, 6, 8, 9, 10];
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

//Q16- Find the product of all numbers.
// Ans-
// let arr = [2, 3, 4, 5];
// const output = arr.reduce(function (acc, curr) {
//   acc = acc * curr;
//   return acc;
// });
// console.log(output);

//Q17-Find the maximum number in an array.
// Ans-
// const arr = [1, 3, 6, 9, 5, 4];
// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output);

//Q18-Count how many elements are in an array (without using .length).
// Ans-
// const arr = [10, 20, 30, 40, 50];
// const count = arr.reduce((total) => {
//   return total + 1;
// }, 0);
// console.log(count);

//Q19- Count how many times each element appears (frequency counter).
//Ans-
// const arr = ["a", "b", "a", "c", "b", "a"];

//Q20- Find the total price from an array of objects {price: number}.
//Ans-
// const items = [
//   { item: "pen", price: 20 },
//   { item: "book", price: 100 },
// ];
// const totalPrice = items.reduce((total, currentItem) => {
//   return total + currentItem.price;
// }, 0);

// console.log(totalPrice);