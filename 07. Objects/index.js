// const user = {
//   name: "Sakshi",
//   age: 28,
//   emailId: "ch.sakshi@12345",
//   amount: 2000,
// };
// // console.log(user);
//console.log(typeof user);
// console.log(user.age);
// console.log(user["age"]);

//CRUD operation: Create Read Update Delete

// Update

// user.accountNumber = 12344;
// user.amount = 7000;

// delete
// delete user.amount;
// console.log(user);

// const user = {
//   name: "Sakshi",
//   age: 28,
//   emailId: "ch.sakshi@12345",
//   amount: 2000,
// };
// const user2 = user;
// user2.age = 30;

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let keys in user) {
//   console.log(keys, user[keys]);
// }

// const user = {
//   name: "Sakshi",
//   age: 28,
//   emailId: "ch.sakshi@12345",
//   amount: 2000,
// };

// const name = user.name;
// const age = user.age;

// object destructing
// const { name, age } = user;
// console.log(name, age);

// const arr = [10, 20, 30, 40, 50];
// const [second, third] = arr;
// console.log(second, third);

// const user = {
//   name: "Sakshi",
//   age: 28,
//   emailId: "ch.sakshi@12345",
//   amount: 2000,
// };

// for (let keys of Object.keys(user)) {
//   console.log(keys);
// }

// for (let values of Object.values(user)) {
//   console.log(values);
// }

// for (let element of Object.entries(user)) {
//   console.log(element);
// }

// for (let [keys, values] of Object.entries(user)) {
//   console.log(keys, values);
// }

// Function ko he method bolte hai
// const user = {
//   name: "Sakshi",
//   age: 28,
//   emailId: "ch.sakshi@12345",
//   amount: 2000,
//   greeting: function () {
//     console.log(`May is coming ${this.name}`);
//     return 20;
//   },
// };

// const user2 = {
//   name: "Tomar",
//   account: 1234,
// };

// user2.greeting = user.greeting;
// user2.greeting();
// console.log(user2);

// const va = user.greeting();
// console.log(va);

//Nested object

// const user = {
//   name: "Sakshi",
//   age: 28,
//   emailId: "ch.sakshi@12345",
//   amount: 2000,
//   address: {
//     city: "xzy",
//     state: "Delhi",
//   },
// };
// shallow copy - nested wala ko handle nhi krta......
// const user2 = { ...user };
// user2.name = "Tomar";
// user2.address.city = "abc";
// console.log(user2);
//console.log(user.address.city);

// deep copy- nested wala copy nhi hote

// const user2 = structuredClone(user);
// user2.address.city = "abc";
// console.log(user);

// key; String || Symbol
const user = {
  name: "Sakshi",
  age: 28,
  accountNumber: 1234,
  0: 2,
  1: 100,
  2: 200,
  [str]: "Hello ji", // symbol ko huma [] mein use karana hai
};
// console.log(user);

const arr = [12, 34, 56, 67, 77];
console.log(arr[1]);
