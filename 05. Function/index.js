// function sayMyName() {
//   console.log("S");
//   console.log("A");
//   console.log("K");
//   console.log("S");
//   console.log("H");
//   console.log("I");
// }

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(5, 8); //13
// addTwoNumbers(8, "4"); //84
// addTwoNumbers(3, "a"); //3a

// function addTwoNumbers(number1, number2) {
//   //   let result = number1 + number2; // 1 Method
//   //   return result;
//   return number1 + number2;
// }
// const result = addTwoNumbers(5, 8);
// console.log("Result:", result);

// function loginUserMessage(username) {
//   return username + " just logged in";
// }

// console.log(loginUserMessage("Sakshi")); // Sakshi just logged in
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage());// undefined just logged in

// function loginUserMessage(username = "sam") {
//   //sam just logged in
//   //   if (username === undefined) {// this line and next line meaning are same
//   if (!username) {
//     console.log("Please enter a username");
//     return;
//   }
//   return username + " just logged in";
// }
// console.log(loginUserMessage()); //Please enter a , Undefined
// console.log(loginUserMessage("Sakshi")); //sakshi just logged in

// Rest Operators
// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }
// console.log(calculateCartPrice(200, 400, 800, 1000, 1200));

// const user = {
//   username: "sakshi",
//   price: 2000,
// };

// function handleObject(anyobject) {
//   let message = `Username is ${anyobject.username} and price is ${anyobject.price}`;
//   console.log(message);
// }
// handleObject(user);

// handleObject({
//   username: "sam",
//   price: 399,
// });

const myNewArray = [200, 600, 800, 1000];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 800, 1000]));
