// const programming = ["html", "css", "js", "react", "node"];

// const values = programming.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

// Filter
// const myNums = [1, 3, 4, 7, 9, 8, 5, 2, 6];

// const newNums = myNums.filter((num) => {
//   return num > 3; // if we are open scope then we have to return scope.
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 3) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1991, edition: 2006 },
//   { title: "Book Three", genre: "Fiction", publish: 1971, edition: 2008 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1996, edition: 2002 },
//   { title: "Book Five", genre: "History", publish: 1989, edition: 2011 },
//   { title: "Book Six", genre: "Science", publish: 1962, edition: 2001 },
//   { title: "Book Seven", genre: "Fiction", publish: 1989, edition: 2004 },
//   { title: "Book Eight", genre: "Science", publish: 2006, edition: 2014 },
//   { title: "Book Nine", genre: "History", publish: 2004, edition: 2016 },
//   { title: "Book Ten", genre: "Science", publish: 2000, edition: 2002 },
// ];

// let userBooks = books.filter((books) => books.genre === "Fiction");
// userBooks = books.filter((books) => {
//   return books.publish >= 1970 && books.genre === "Fiction";
// });
// console.log(userBooks);

// Map

// const myNums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// const newNums = myNums.map((num) => num + 5);

// map chaning
// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 50);
// console.log(newNums);

// const values = myNums.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(values);

// reduce method

const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "html",
    price: 1000,
  },
  {
    itemName: "css",
    price: 2000,
  },
  {
    itemName: "javascript",
    price: 4000,
  },
  {
    itemName: "react",
    price: 6000,
  },
  {
    itemName: "node js",
    price: 8000,
  },
];

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(price);


