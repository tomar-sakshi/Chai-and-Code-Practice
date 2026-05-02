//Q1 - Create an object for a student with properties: name, age, marks.
// Ans-
// const student = {
//   name: "Devanshi",
//   age: 23,
//   marks: 85,
// };
// console.log(student);

//Q2- Print all keys of an object.
// //Ans -
// console.log(Object.keys(student));

//Q3 - Print all values of an object.
// Ans-
// console.log(Object.values(student));

//Q4- Add a new property grade to an existing object.
//Ans-
// const student = {
//   name: "Devanshi",
//   age: 23,
//   marks: 85,
// };
// student.grade = "A";
// console.log(student);

// Q5 -Update the value of a property in an object.
// Ans-
// Update
// student.marks = 89;
// console.log(student);

//Q6 -Delete a property from an object.
// Ans-
//Delete
// delete student.marks;
// console.log(student);

//Q7 - Check if a property exists in an object.
//Ans-
// console.log("marks" in student);

//Q8- Count how many properties an object has.
//Ans-
// const count = Object.keys(student).length;
// console.log(count);

//Q9-Loop through an object and print key-value pairs.
//Ans-
// const student = {
//   name: "Devanshi",
//   age: 23,
//   marks: 85,
// };
// for (let keys of Object.keys(student)) {
//   console.log(keys);
// }

// for (let values of Object.values(student)) {
//   console.log(values);
// }

// Q10-Create an array of objects (students) and print names of all students.
 //Ans-
// const students = [
//   {
//     name: "Sakshi",
//     age: 27,
//     marks: 77, 
//   },
//   {
//     name: "Suryanshu",
//     age: 29,
//     marks: 87,
//   },
//   {
//     name: "Tanu",
//     age: 27,
//     marks: 89,
//   },
// ];
// for (let student of students) {
//   console.log(student.name);
// }
