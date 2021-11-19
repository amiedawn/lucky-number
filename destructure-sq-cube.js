// incorrect guess:
// function calculate(num) {
//   let n = 10;
//   square = num * num;
//   cube = num * num * num;
//   arr = [square, cube];
// }

// let [a, b] = calculate() || [];

// console.log(a, b); // undefined undefined (because I don't have return anywhere in the function)

function calculate(a) {
  return [a*a, a*a*a];
};

let [square, cube] = calculate(10);

console.log(square);
console.log(cube);
