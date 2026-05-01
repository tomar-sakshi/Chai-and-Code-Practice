//**************Practice Questions ********************//

// Question 1 -Print Numbers 1 to 10 .Use a loop to print numbers from 1 to 10.

//Answer -

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Question 2- Print Even Numbers (1–20).Print all even numbers between 1 and 20.

// Solution-

// for (let num = 1; num <= 20; num++) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// Question 3-  Print Odd Numbers (1–20).Print all odd numbers between 1 and 20.

// Solution-

// for (let num = 1; num <= 20; num++) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
// }

// Question 4 -Sum of First 10 Numbers.Calculate and print the sum of numbers from 1 to 10.

// Answer-

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
//   console.log(sum);
// }

// Question 5- Multiplication Table.Print the table of a given number (e.g., 5 × 1 to 5 × 10).

//Awswer-
// for (let i = 1; i <= 10; i++) {
//   console.log("5 * ", i, "=", 5 * i);
// }

//Question 6- Reverse Counting.Print numbers from 10 to 1.

//Answer-

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// function mul(num1, num2) {
//   const result = num1 * num2;
//   return result;
// }

// const result2 = mul(10,5);
// console.log(result2);

// function mul(num1, num2) {
//   const result = num1 * num2;
//   return result;
// }
// const result2 = mul(20, 5);
// const result3 = mul(10, 2);
// const result4 = mul(2, 2);
// const result5 = mul(3, 6);
// console.log(result2, result3, result4, result5);


const funcName = (value) => {
  return value ** 3;
};

// const functionName = (parameters...) => {
//     // function body
// } // function definition

// functionDefinition = parameters + functionBody
// function => functionName + functionDefinition
const funcName = () => {};

funcName();

const result = [2, 3, 4].map(2)

// [funcName(12), funcName(32), funcName(34)];
// [undefined, undefined, undefined];
console.log(result);

// console.log(funcName);
// console.log(funcName2);