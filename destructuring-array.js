// example 1:

// function getItems() {
//   return null;
// }

// let [a=10, b=20] = getItems() || [];

// console.log(a);
// console.log(b);


//example 2:

// function getScores() {
//   return [10, 20, 30, 40];
// }

// let [a=99, b, c, d, e=7, f] = getScores() || [];

// console.log(a); // 10 (99 is ignored because it was already defined)
// console.log(e); // 7 (because it hadn't been defined yet)
// console.log(f); // undefined (because it hadn't been defined yet)


// example 3:

// function getScores() {
//   return [10, 20, 30,
//     ['red', 'green']  
//   ];
// }

// let [a, b, c, [r, g]] = getScores() || [];

// console.log(a); // 10
// console.log(r); // red

// example 4:

// function getScores() {
//   return [10, 20, 30, 40, 50, 60, 70];
// }

// let [a, b, c, ...rest] = getScores();

// console.log(rest); // [40, 50, 60, 70]

// if you do let[x, y, z] =rest;
// console.log(y); //50


// example 5:

let p = 10; q = 100;
[p, q] = [q, p];

console.log(p); //100