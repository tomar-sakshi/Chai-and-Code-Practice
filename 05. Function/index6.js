// Question 1- Simple Function. Create a function that prints "Hello World".
// Answer

// function sayHello() {
//   console.log("Hello World");
// }
// sayHello();

// Question 2 - Write a function that takes a name and prints "Hello, [name]".

// Answer-
// function hello() {
//   console.log("Hello,Sakshi");
// }
// hello();

//Question 3- Create a function that returns the sum of two numbers.

// Answer-

// function sum(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// const result2 = sum(20, 10);
// console.log(result2);

//Question 4- Create a function that takes a number and returns its double.

// Answer-
// function double(num) {
//   return num * 2;
// }
// console.log(double(10));

// Question 5- Create a function that checks if a number is even or odd.
// Answer-

// function checkEvenOld(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(checkEvenOld(7));

// Question 6- Write a function that returns the square of a number.

//Answer-
// function square(num) {
//   return num * num;
// }
// console.log(square(6));

// Question 7- Create a function to find the largest of two numbers.

//Answer -
// function largest(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(largest(40, 20));

//Question 8- Create a function to check if a number is positive or negative or zero
//Answer-
// function checkNumber(num) {
//   if (num > 0) {
//     return "Postive";
//   } else if (num < 0) {
//     return "Negative";
//   } else {
//     return "zero";
//   }
// }
// console.log(checkNumber(8));
// console.log(checkNumber(-7));
// console.log(checkNumber(0));

// Question 9 -Write a function that takes a string and returns it in uppercase.
// Answer -
// function toUpperCaseString(str) {
//   return str.toUpperCase();
// }
// console.log(toUpperCaseString("suryanshu"));

//Question 10- Write a function that returns the length of an array.

//Answer-

// function getArrayLength(arr) {
//   return arr.length;
// }
// console.log(getArrayLength([3, 6, 7, 9]));

// Question 11- Create a function that checks if a number is divisible by 10.

// Answer-
// function isDivisibleByTen(num) {
//   return num % 10 === 0;
// }

// console.log(isDivisibleByTen(88));

// Question 12- Create a function that takes a name as input and prints a greetings.

//Answer-
// function greet(name) {
//   console.log("Hello," + name);
// }
// greet("Sakshi");

// Question 13- Create a function to subtract two numbers.

// Answer-
// function sub(num1, num2) {
//   const result = num1 - num2;
//   return result;
// }
// const result2 = sub(40, 20);
// console.log(result2);

// Question 14 - Write a function to multiply two numbers.

// Answer-
// function mul(num1, num2) {
//   const result = num1 * num2;
//   return result;
// }
// const result2 = mul(8, 4);
// console.log(result2);

// Question 15- Create a function to find the cube of a number.

// Answer-
// function cube(num){
//   const result = num ** 3;
//   return result;
// }
// const result2 = cube(6);
// console.log(result2);

// Question 16- Create a function to find the length of a string.
// Answer-
// function getStringLength(str) {
//   return str.length;
// }
// console.log(getStringLength("Sakshi"));

// Question 17- Write a function that returns the first element of an array.
// Answer-
// function getFirstElement(arr) {
//   return arr[0];
// }
// console.log(getFirstElement([23, 44, 55, 66]));

//Question 18- Create a function to find the sum of all elements in an array.
// // Answer-
// function sumArrayElement(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]; // 0 + 3 = 3, 3 + 45 = 48, 48 + 1 = 49, 49 + 3 = 52, 52 + 5 = 57, 57 + 6 = 63
//   }
//   return sum;
// }
// const arr = [3, 45, 1, 3, 5, 6];
// const result = sumArrayElement(arr);
// console.log(result);

//****************Arrow Function Practice***********************//

// Question 1- Write an arrow function that prints "Hello World".

// Answer-
// const printHello = () => {
//   console.log("Hello World");
// };
// printHello();

//Question 2- Write an arrow function that takes a name and returns "Hello, [name]".

//Answer-
// const sayHello = () => {
//   console.log("Hello, Sakshi ");
// };
// sayHello();

// Question 3- Create an arrow function to return the sum of two numbers.

//Answer-
// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(sum(3, 5));

//Question 4- Write an arrow function to subtract two numbers.
//Answer -
// const sub = (num1, num2) => {
//   return num1 - num2;
// };
// console.log(sub(9, 6));

//Question 5- Create an arrow function to multiply two numbers.
// Answer-
// const mul = (num1, num2) => {
//   return num1 * num2;
// };
// console.log(mul(5, 4));

// Question 6- Write an arrow function to check if a number is even or odd.

// Answer -
// const checkEvenOld = (num) => {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Old";
//   }
// };
// console.log(checkEvenOld(8));

//Question 7- Create an arrow function to find the square of a number.
// Answer -
// const square = (num) => {
//   return num * num;
// };
// console.log(square(9));

// Question 8- Create an arrow function that returns the cube of a number.
// Answer-

// const cube = (num) => {
//   return num * num * num;
// };
// console.log(cube(6));

// Question 9- Create an arrow function to find the largest of two numbers.
// Answer-
// const largestNumber = (num1, num2) => {
//   if (num1 > num2) {
//     console.log("Num1 is Largest");
//   } else {
//     console.log("Num2 is Largest");
//   }
// };
// largestNumber(10, 56);

// Question 10 - Create a function to check if a number is positive, negative, or zero.
// Solution-
// const checkNumber = (num) => {
//   return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// };
// console.log(checkNumber(6));

// Question 11 - Write a function that takes a string and returns it in uppercase.
// Answer-
// const toUpperCaseString = (str) => str.toUpperCase();
// console.log(toUpperCaseString("Sakshi"));

//Question 12- Write an arrow function to find the length of a string.
//Answer-
// const getLength = (str) => str.length;
// console.log(getLength("Sakshi"));

// Question 13- Create an arrow function that returns the first element of an array.
// Answer

// const getFirstElement = (arr) => {
//   return arr[0];
// };
// const numbers = [20, 33, 44, 60, 56];
// console.log(getFirstElement(numbers));

//***************Questions*********************//

//Question 1- Create a function to find the largest of three numbers.
// Answer-
// const num1 = 45;
// const num2 = 33;
// const num3 = 32;

// function largestNumber(num) {
//   if (num1 >= num2 && num1 >= num3) {
//     console.log("num1 is largest");
//   } else if (num2 >= num1 && num2 >= num3) {
//     console.log("num2 is largest");
//   } else {
//     console.log("num3 is largest");
//   }
// }
// largestNumber(45, 33, 43);

// Question 2- Create a function that takes a string and returns it in lowercase.
// Answer-
// function toLowerCase(str) {
//   return str.toLowerCase();
// }
// console.log(toLowerCase("SAKSHI"));

//Question 3- Create a function that returns the last element of an array.
// Answer-
// function getLastElement(arr) {
//   return arr[5];
// }
// console.log(getLastElement([23, 45, 6, 2, 5, 8]));

//Question 4 -Write a function to count how many elements are in an array (without using .length directly if possible).
// Answer-
// function countElement(arr) {
//   let count = 0;
//   for (let num of arr) {
//     count++;
//   }
//   return count;
// }
// const arr = [20, 30, 32, 22, 45, 78];
// console.log(countElement(arr));

// Question 5- Create a function to calculate the sum of all numbers from 1 to n.
// Answer
// function sumToN(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumToN(35));// 630
