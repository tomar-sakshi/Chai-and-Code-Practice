// Arrays

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["Varun", "Kartik", "Salmam"];

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

// Array Methods

// myArr.push(6);// Add value in the end
// myArr.pop(3);// Remove value in the end
// myArr.unshift(6);//Add value in the starting
// myArr.shift();// Remove value in the starting
// console.log(myArr);

// console.log(myArr.includes(4));// it checking elemets in present in array or not , it return true and false.
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// slice, splice

// const myArr = [0, 1, 2, 3, 4, 5, 6, 7];

// console.log("First", myArr);

// const newArr = myArr.slice(1, 4);
// console.log(newArr);

// console.log("Second", myArr);

// const newArr2 = myArr.splice(1, 4);
// console.log("Third", myArr);
// console.log(newArr2);

// const marvelHeros = ["thor", "Ironman", "Spiderman"];
// const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// spread Operators
// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

// const array = [1, 2, 3, 4, 5, [6, 7], 8, [9, 10, [1, 2]]];
// const anotherArray = array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// console.log(anotherArray);

// console.log(Array.isArray("Sakshi"));//false
// console.log(Array.from("Sakshi"));// [ 'S', 'a', 'k', 's', 'h', 'i' ]
// console.log(Array.from({name: "Sakshi"}))// it return empty array , we can't converted directly ..[]

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]

// **************Coder Army****************

// let marks = [80, 90, 50, 60, 40, 55];
// console.log(marks);
// console.log(marks.length);

// let arr = [30, 40, 20, "Sakshi", false];
// console.log(arr[1]);
// console.log(typeof arr);

//push- add elements at the end

// arr.push(80);
// arr.push("Tanu");
// arr.push(true);
// console.log(arr);

//pop- remove elements at the end
// arr.pop();
// console.log(arr);

// unshift- adding elements in the start.
// arr.unshift(20);
// console.log(arr);

// shift- remove element at the first
// arr.shift();
// console.log(arr);

let arr = [20, 30, 40, 50, 60];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let num of arr) {
//   console.log(num);
// }


// let arr = [20, 30, 50, 60, 10];
// let arr2 = arr;

// arr.push(60);
// console.log(arr);

// Non primitive - copy by refernce hota hai
// primitive- copy by value

// const arr = [20, 30, 40, 50, 60];
// console.log(arr.slice(1, 4));

// const arr = [30, 40, 44, 10, 20, 60];
// const arr2 = arr.splice(1, 3, "Sakshi", 50);
// console.log(arr);

// const arr = [20, 30, 40, 50];
// const arr2 = [80, "Sakshi", true, "Tanu", 60];
// const arr4 = [70, 60, 20, 10];

// arr.push(arr2);
// const arr3 = arr.concat(arr2, arr4);

//spread operators
// const arr3 = [...arr, ...arr2, ...arr4];
// console.log(arr3);

const names = ["Sakshi", "Tanu", "Aditi", "Kajal", "Somia", "Khushi", "Arnima"];
// console.log(names.toString());
// console.log(names.join("_"));
// console.log(names.indexOf("Tanu"));
// console.log(names.lastIndexOf("Tanu"));
// console.log(names.includes("Kajal"));
// console.log(names.sort());// in ascending order
// console.log(names.reverse()); // in descending order

// const b = [80, 30, 90, 50, 60, 101];
// const best = ["Sakshi", 50, false, "Tanu"];
// console.log(b.sort());
// console.log(best.sort());

// const arr = [20, 40, 50, 60, 20, 50];

// arr.sort((a, b) => a - b);//ascending order

// arr.sort((a, b) => b - a);//descending order
// console.log(arr);

// -ve: phle a aaega phir b
// +ve = phle b aaea phir a

// const arr = [10, 20, 40, [10, 30, [1, 4, 9], 40, 20], 60];
// const a = arr.flat(Infinity);
// console.log(a);


