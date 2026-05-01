//***********************Practice Question**********************//

//Q1 -Create an array of 5 numbers and print all elements using a loop.
// Ans
// const arr = [20, 30, 2, 45, 55];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//Q2- Find the sum of all elements in an array.
// Ans
// const arr = [23, 45, 55, 11, 65];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);// 199

//Q3- Find the largest number in an array.
//Ans
// function findLargest(arr) {
//   let largest = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// let arr = [20, 34, 2, 8, 9, 76];
// let result = findLargest(arr);
// console.log(result);

// Q4- Find the smallest number in an array.
// Ans-

// function findSmallest(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }
// let arr = [2, 7, 9, 7, 4, 6, 9];
// let result = findSmallest(arr);
// console.log(result);// 2

//Q5- Count how many elements are in an array (without using .length if possible).
// Ans-
// function countElement(arr) {
//   let count = 0;
//   for (let nun of arr) {
//     count++;
//   }
//   return count;
// }
// const arr = [20, 30, 23, 35, 55, 78, 90];
// console.log(countElement(arr));// 7

//Q6 - Create a function that returns all even numbers from an array.
// Ans-
// function getEvenNumbers(arr) {
//   let evenNumbers = [];
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       evenNumbers.push(num);
//     }
//   }
//   return evenNumbers;
// }
// const numbers = [1, 3, 5, 6, 8, 9, 2, 6];
// console.log(getEvenNumbers(numbers));

 //Q7 -Create a function that returns all odd numbers from an array.
 //Ans
 function getOddNumbers(arr) {
   let oddNumbers = [];
   for (let num of arr) {
     if (num % 3 === 0) {
       oddNumbers.push(num);
     }
   }
   return oddNumbers;
 }
 const numbers = [1, 3, 5, 6, 8, 9, 2, 6];
 console.log(getoddNumbers(numbers));
