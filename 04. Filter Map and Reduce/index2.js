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



